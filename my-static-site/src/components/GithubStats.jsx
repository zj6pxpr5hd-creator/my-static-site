import { useState, useEffect } from "react";
import ProfileSummary from "./ProfileSummary";

function GithubStats(){

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [stats, setStats] = useState(null);
    const [reposData, setReposdata] = useState(null);

    const fetchGithub = async () => {
        setLoading(true);
        try {
            const response = await fetch(`https://api.github.com/users/zj6pxpr5hd-creator`);
            
            if(!response.ok){ 
                switch  (response.status){
                    case 404: 
                        throw new Error('User not found');
                    case 403:
                        throw new Error('Rate limit reached, try again later');
                    default:
                        throw new Error('Something went wrong on the server');
                }
                
            }

            const user = await response.json();
            setStats(user);

            const responseRepos = await fetch(`https://api.github.com/users/zj6pxpr5hd-creator/repos`);

            if(!responseRepos.ok){ 
                switch  (responseRepos.status){
                    case 404: 
                        throw new Error('User not found');
                    case 403:
                        throw new Error('Rate limit reached, try again later');
                    default:
                        throw new Error('Something went wrong on the server');
                }
                
            }
            // 5) Request was successful, turn the raw response in a Javascript array
            const repos = await responseRepos.json();

            // 6) Success => save user data
            setReposdata(repos);

        } catch (error) {
            setError(error.message)
        } finally {
            setLoading(false)
        }
    };


    useEffect(
        () => {
            fetchGithub();
        }, []
    );

    return(
        <section>
            <h3>Github Stats</h3>
            {error.length!==0 ? <p>{error}</p>
            : loading ? <p>Loading...</p> : <ProfileSummary user = {stats} repos={reposData}/>}
        </section>
    );

}

export default GithubStats;