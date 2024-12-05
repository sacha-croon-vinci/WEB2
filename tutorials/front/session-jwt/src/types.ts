interface PizzeriaContext {
  pizzas: Pizza[];
  setPizzas: (pizzas: Pizza[]) => void;
  actionToBePerformed: boolean;
  setActionToBePerformed: (actionToBePerformed: boolean) => void;
  clearActionToBePerformed: () => void;
  drinks: Drink[];
  addPizza: (newPizza: NewPizza) => Promise<void>;
  registerUser: (newUser : User) => Promise<void>;
  loginUser: (user : User) => Promise<void>;
}


interface User {
  username: string,
  password: string
}

interface AuthenticatedUser {
  username : string,
  token : string,
}

type MaybeAuthenticUser = AuthenticatedUser | undefined;


interface Pizza {
  id: number;
  title: string;
  content: string;
}

type NewPizza = Omit<Pizza, "id">;

interface Drink {
  title: string;
  image: string;
  volume: string;
  price: string;
}



export type { Pizza, NewPizza, Drink, PizzeriaContext, User,AuthenticatedUser, MaybeAuthenticUser };
