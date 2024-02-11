import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../hooks/useAxiosPublic';

const useTodos = () => {
    const {user} = useContext(AuthContext);
    console.log(user?.email);
    const axiosPublic = useAxiosPublic()
    const { data: todos = [],refetch } = useQuery({
        queryKey: ['todos', user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/todos/${user?.email}`)
            return res.data;
        }
    })
    return [todos, refetch];
};

export default useTodos;