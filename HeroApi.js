const HERO_ENDPOINT = 'https://crudcrud.com/api/d82374f11e984155b75ab2d98f74a6f7/heroes';

class HeroApi {
    get = async () => {
        try {
            console.log(`${HERO_ENDPOINT}`)
            const resp = await fetch(`${HERO_ENDPOINT}`);
            console.log(resp);
            const data = await resp.json();
            console.log(data);
            return data;
        } catch(e) {
            console.log('Error:  had an issue with get heroes', e);
        }
       
    }

    getOne = async (id) => {
        try {
            console.log(`${HERO_ENDPOINT}`)
            const resp = await fetch(`${HERO_ENDPOINT}/${id}`);
            console.log(resp);
            const data = await resp.json();
            console.log(data);
            return data;
        } catch(e) {
            console.log(`Error:  get hero id: ${id} had an issue.`, e);
        }
       
    }


    post = async (hero) => {
        try {
            const resp = await fetch(`${HERO_ENDPOINT}`, {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(hero)
            });
            return await resp.json();
        } catch(e) {
            console.log('Error: had an issue with post heroes', e);
        }  
    }

    put = async (hero) => {
        try {
            console.log(HERO_ENDPOINT);
            const resp = await fetch(`${HERO_ENDPOINT}/${hero._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify({
                "firstname" : hero.firstname, 
                "lastname" : hero.lastname, 
                "address" : hero.address, 
                "city" : hero.city, 
                "state" : hero.state, 
                "phone" : hero.phone, 
                "powers": hero.powers }),
            });
            console.log(resp);
            

            return resp;
        } catch(e) {
            console.log('Error: had an issue with update heroes', e);
        }  
    }

    delete = async (heroId) => {
        try {
            console.log(HERO_ENDPOINT);
            const resp = await fetch(`${HERO_ENDPOINT}/${heroId}`, {
                method: 'DELETE'
            });
            console.log(resp);
        } catch(e) {
            console.log('Error: had an issue with delete heroes', e);
        }
    }
}

export const heroApi = new HeroApi();
