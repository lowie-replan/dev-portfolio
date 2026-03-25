import { useEffect, useState, type JSX } from 'react';
import { Navigate } from 'react-router-dom';
import { supabase } from '../../lib/supabaseClient';

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
    const [loading, setLoading] = useState(true);
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        const checkUser = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            setAuthenticated(!!session);
            setLoading(false);
        };
        checkUser();
    }, []);

    if (loading) return null;

    return authenticated ? children : <Navigate to="/Admin/Login" />;
};

export default ProtectedRoute;