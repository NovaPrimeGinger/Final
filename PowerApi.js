const POWER_ENDPOINT = 'https://crudcrud.com/api/d82374f11e984155b75ab2d98f74a6f7/powers';

class PowerApi {
    get = async () => {
        try {
            console.log(POWER_ENDPOINT)
            const resp = await fetch(POWER_ENDPOINT);
            console.log(resp);
            const data = await resp.json();
            console.log(data);
            return data;
        } catch(e) {
            console.log('Error: had an issue with get powers', e);
        }
       
    }

    getOne = async (id) => {
        try {
            console.log(`${POWER_ENDPOINT}/${id}`)
            const resp = await fetch(`${POWER_ENDPOINT}/${id}`);
            console.log(resp);
            const data = await resp.json();
            console.log(data);
            return data;
        } catch(e) {
            console.log(`Error:  get one power id: ${id} had an issue.`, e);
        }
       
    }

    post = async (power) => {
        try {
            const resp = await fetch(`${POWER_ENDPOINT}`, {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(power)
            });
            return await resp.json();
        } catch(e) {
            console.log('Error: had an issue with post powers', e);
        }  
    }

    put = async (power) => {
        try {
            console.log(POWER_ENDPOINT);
            const resp = await fetch(`${POWER_ENDPOINT}/${power._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify({"name" : power.name}),
            });
            console.log(resp);
            return await resp.json();
        } catch(e) {
            console.log('Error: had an issue with update powers', e);
        }  
    }

    delete = async (powerId) => {
        try {
            console.log(POWER_ENDPOINT);
            const resp = await fetch(`${POWER_ENDPOINT}/${powerId}`, {
                method: 'DELETE'
            });
            console.log(resp);
        } catch(e) {
            console.log('Error: had an issue with delete powers',e);
        }
    }
}

export const powerApi = new PowerApi();
