const {weather} = require('./weather');
const {repos} = require('./repos');
const {user} = require('./user');

async function api(name,followers){
    if(!name) return console.log('Wprowadź nazwę użytkownika');
    try{
    const userr = await user(name);
    const weatherr = await weather(userr);
    const rep = await repos(name);
    const repo = rep.data.map((e,i) => `${i+1}.${e.name}\n`);
    const reposit = repo.join("");
    const obj ={
            Username: userr.data.name,
            Repos: userr.data.public_repos,
            Weather: `${weatherr.data.weather[0].main} and ${weatherr.data.weather[0].description}`,
            Repos_names: reposit
        };
    if(followers === undefined || null || followers !== 'followers'){
        for(const [key,value] of Object.entries(obj)){
            console.log(`${key}: ${value}`)
        }
        console.log('Aby wyświetlić liczbę followersów, wpisz: followers, po nazwie użytkownika');
    }else{
        const newObj = {Followers: userr.data.followers, ...obj}
        for(const [key,value] of Object.entries(newObj)){
            console.log(`${key}: ${value}`);
        }
        }
    }catch(error){
        console.log(error);
    }

}

module.exports = {
    api
}
