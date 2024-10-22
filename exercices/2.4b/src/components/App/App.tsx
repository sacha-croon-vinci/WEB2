import './App.css'
import UserCard from '../User'
import { User } from '../../types'

function App() {

  const UserLists: User[] = [
    { name: 'Alice', age: 25, status: 'online' },
    { name: 'Bob', age: 30, status: 'offline' },
    { name: 'Charlie', age: 28, status: 'online' },
  ]

  return (
    <>
      <div>
        {UserLists.map((user:User, index:number) => (
          <UserCard key={index} user={user} />
        ))}
      </div>
    </>
  )
}

export default App
