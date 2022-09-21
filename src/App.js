import Profile from './components/Profile'
import UserList from './components/UserList'
import general from './styles/general.module.css'
import UserState from './context/User/UserState'

function App() {
    return (
        <UserState>
            <div className={general.d_flex}>
                <UserList />
                <Profile />
            </div>
        </UserState>
    );
}

export default App;
