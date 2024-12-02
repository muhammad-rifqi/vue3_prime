class Api {
    static url = 'http://localhost:3009';
    static fetchDataUser = async () => {
        try {
            const response = await fetch(this.url + '/api_user');
            if (!response.ok) throw new Error('Failed to fetch data');
            const data = await response.json();
            return data;
        } catch (err) {
            console.log(err)
        }
    }

    static fetchDataTransaction = async () => {
        try {
            const response = await fetch(this.url + '/api_transaction');
            if (!response.ok) throw new Error('Failed to fetch data');
            const data = await response.json();
            return data;
        } catch (err) {
            console.log(err)
        }
    };

    static app1 = async (val1, val2, redirect) => {
        try {
            const response = await fetch(this.url + '/api_approve1', {
                headers: { "Content-Type": "application/json" },
                method: 'POST',
                body: JSON.stringify({ "id": val1, "approve1": val2 })
            });
            if (!response.ok) throw new Error('Failed to fetch data');
            const result = await response.json();
            console.log(result);
            window.location.href = `${redirect}`;
        } catch (err) {
            console.log(err);
            window.location.href = `${redirect}`;
        }

    }

    static rejc1 = async (val1, val2, redirect) => {
        try {
            const response = await fetch(this.url + '/api_rejected1', {
                headers: { "Content-Type": "application/json" },
                method: 'POST',
                body: JSON.stringify({ "id": val1, "approve1": val2 })
            });
            if (!response.ok) throw new Error('Failed to fetch data');
            const result = await response.json();
            console.log(result);
            window.location.href = `${redirect}`;
        } catch (err) {
            console.log(err);
            window.location.href = `${redirect}`;
        }
    }

    static app2 = async (val1, val2, redirect) => {
        try {
            const response = await fetch(this.url + '/api_approve2', {
                headers: { "Content-Type": "application/json" },
                method: 'POST',
                body: JSON.stringify({ "id": val1, "approve2": val2 })
            });
            if (!response.ok) throw new Error('Failed to fetch data');
            const result = await response.json();
            console.log(result);
            window.location.href = `${redirect}`;
        } catch (err) {
            console.log(err);
            window.location.href = `${redirect}`;
        }
    }

    static rejc2 = async (val1, val2, redirect) => {
        try {
            const response = await fetch(this.url + '/api_rejected2', {
                headers: { "Content-Type": "application/json" },
                method: 'POST',
                body: JSON.stringify({ "id": val1, "approve2": val2 })
            });
            if (!response.ok) throw new Error('Failed to fetch data');
            const result = await response.json();
            console.log(result);
            window.location.href = `${redirect}`;
        } catch (err) {
            console.log(err);
            window.location.href = `${redirect}`;
        }
    }

    static app3 = async (val1, val2, redirect) => {
        try {
            const response = await fetch(this.url + '/api_approve3', {
                headers: { "Content-Type": "application/json" },
                method: 'POST',
                body: JSON.stringify({ "id": val1, "approve3": val2 })
            });
            if (!response.ok) throw new Error('Failed to fetch data');
            const result = await response.json();
            console.log(result);
            window.location.href = `${redirect}`;
        } catch (err) {
            console.log(err)
            window.location.href = `${redirect}`;
        }
    }

    static rejc3 = async (val1, val2, redirect) => {

        try {
            const response = await fetch(this.url + '/api_rejected3', {
                headers: { "Content-Type": "application/json" },
                method: 'POST',
                body: JSON.stringify({ "id": val1, "approve3": val2 })
            });
            if (!response.ok) throw new Error('Failed to fetch data');
            const result = await response.json();
            console.log(result);
            window.location.href = `${redirect}`;
        } catch (err) {
            console.log(err)
            window.location.href = `${redirect}`;
        }

    }

    static app4 = async (val1, val2, redirect) => {

        try {
            const response = await fetch(this.url+'/api_approve4', {
              headers : {"Content-Type" : "application/json"},
              method : 'POST',
              body : JSON.stringify({"id" : val1, "approve4" : val2})
            });
            if (!response.ok) throw new Error('Failed to fetch data');
            const result = await response.json();
            console.log(result);
            window.location.href = `${redirect}`;
          } catch (err) {
            console.log(err)
            window.location.href = `${redirect}`;
          } 

    }

    static rejc4 = async (val1, val2, redirect)=> {

        try {
            const response = await fetch(this.url+'/api_rejected4', {
              headers : {"Content-Type" : "application/json"},
              method : 'POST',
              body : JSON.stringify({"id" : val1, "approve4" : val2})
            });
            if (!response.ok) throw new Error('Failed to fetch data');
            const result = await response.json();
            console.log(result);
            window.location.href = `${redirect}`;
          } catch (err) {
            console.log(err)
            window.location.href = `${redirect}`;
          } 
    }
}

export default Api;

