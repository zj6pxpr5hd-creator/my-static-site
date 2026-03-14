function preferredLanguage(repos){
    if(repos === null) return null;

    const languageCount = {};


    repos.forEach(repo => {
        if (!repo.language) return; 

        if(languageCount[repo.language]){   
            languageCount[repo.language] += 1;
        } else  {                           
            languageCount[repo.language] = 1;
        }

    });

    let preferredLanguage  = "";
    let max = 0;

    Object.entries(languageCount).forEach(([language, count])  => {
        if(count > max){
            max =  count;
            preferredLanguage = language;
        }
    });

    return preferredLanguage;
}

export default preferredLanguage;