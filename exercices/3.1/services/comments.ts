import path from "node:path";
import { Comment } from "../types";
import { parse, serialize } from "../utils/json";
import { readOne } from "./films";
const jsonDbPath = path.join(__dirname, "/../data/comments.json");



//default comments
/*const defaultComments: Comment[] = [
    {
        filmId : 3,
        username : "jack",
        comment : "I LOved IT !"
    },
    {
        filmId : 1,
        username : "Popol",
        comment : "Null vraiment pas belle qualité vidéo !"
    }
];*/

function readAllComments(filmId: number | undefined = undefined) : Comment[]  {
    const comments = parse<Comment>(jsonDbPath);

    return filmId ? comments.filter((comment)=> comment.filmId===filmId) : comments;
}

function createOneComment(comment : Comment): void {
    const comments = parse<Comment>(jsonDbPath);
    
    if(!comment) throw new Error("Pas de commentaire reçu");
    

    const filmFound = readOne(comment.filmId);
    if(!filmFound) throw new Error("Pas de film trouvé pour ce commentaire");

    const hasAlreadyCommented = comments.some(
        (c) => c.filmId === comment.filmId && comment.username=== c.username
    );

    if(hasAlreadyCommented) throw new Error("Commentaire déja enregistré pour ce film et cette personne ");

    comments.push(comment);
    serialize(jsonDbPath,comments);

}

function deleteOneComment(filmId : number, username : string): Comment {
    const comments = parse<Comment>(jsonDbPath);

    const indexComment = comments.findIndex( (c) => c.filmId===filmId && c.username===username);
    if(indexComment==-1)throw new Error("Index du commentaire pas trouvé");

    const commentDeleted = comments.splice(indexComment,1);


    serialize(jsonDbPath,comments);
    
    return commentDeleted[0];

}


export {
    readAllComments,
    createOneComment,
    deleteOneComment
};