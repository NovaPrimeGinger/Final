const EVENT_ENDPOINT = 'https://crudcrud.com/api/d82374f11e984155b75ab2d98f74a6f7/events';

class EventApi {
    get = async () => {
        try {
            console.log(EVENT_ENDPOINT)
            const resp = await fetch(`${EVENT_ENDPOINT}`);
            console.log(resp);
            const data = await resp.json();
            console.log(data);
            return data;
        } catch(e) {
            console.log('Error: had an issue with get events', e);
        }
       
    }

    getOne = async (id) => {
        try {
            console.log(EVENT_ENDPOINT)
            const resp = await fetch(`${EVENT_ENDPOINT}/${id}`);
            console.log(resp);
            const data = await resp.json();
            console.log(data);
            return data;
        } catch(e) {
            console.log(`Error:  get event id: ${id} had an issue.`, e);
        }
       
    }

    post = async (event) => {
        try {
            const resp = await fetch(`${EVENT_ENDPOINT}`, {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(event)
            });
            return await resp.json();
        } catch(e) {
            console.log('Error: had an issue with post events', e);
        }  
    }

    put = async (event) => {
        try {
            console.log(EVENT_ENDPOINT);
            const resp = await fetch(`${EVENT_ENDPOINT}/${event._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify({"name" : event.name, "date" : event.date, "address": event.address, "phone" : event.phone, "description" : event.description, "powers" : event.powers}),
            });
            console.log(resp);
            return await resp;
        } catch(e) {
            console.log('Error: had an issue with update events', e);
        }  
    }

    delete = async (eventId) => {
        try {
            console.log(EVENT_ENDPOINT);
            const resp = await fetch(`${EVENT_ENDPOINT}/${eventId}`, {
                method: 'DELETE'
            });
            console.log(resp);
        } catch(e) {
            console.log('Error: had an issue with delete events',e);
        }
    }
}

export const eventApi = new EventApi();
