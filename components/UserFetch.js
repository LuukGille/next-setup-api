import React, {useEffect, useReducer} from 'react';
import axios from "axios";
const USER_DATA = 'https://randomuser.me/api/?results=10';

const reducer = (state, payload) => ({ ...state, ...payload });

const UserFetch = () => {
    const [data, setData] = useReducer(reducer, { users: [], isFetching: false });

    useEffect(() => {
        const fetchData = async () => {
            try {
                setData({ isFetching: true });
                const response = await axios.get(USER_DATA);
                setData({ users: response.data, isFetching: false });
            } catch (e) {
                console.log(e);
                setData({ isFetching: false });
            }
        };
        fetchData();
    }, []);

    const Users = data.users.results

    if(Users == undefined){
        return (
          <p>
              Loading...
          </p>
        );
    } else {
        return (
            <>
                {Users.map(user => 
                    <div key={user.email}>{user.name.title}. {user.name.first} {user.name.last}</div>
                )}
            </>
        );
    }
}

export const getStaticProps = async () => {
    const data = await fetchData();
  
    return {
      props: data,
    };
  }

export default UserFetch;