const [method, resource, title, price, category] = process.argv.slice(2);

if (!method || !resource) {
    console.log('ERROR.Uso: npm run start <GET|POST|DELETE> <products | products/id> [title price category]');
    process.exit(1);
}
const [endpoint, id] = resource.split('/');

const baseUrl = 'https://fakestoreapi.com';

// GET products para todos
if (method === 'GET' && endpoint === 'products' && !id) {
    try {
        const response = await fetch(`${baseUrl}/products`);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// GET products para un unico producto
if (method === 'GET' && endpoint === 'products' && id) {
    try {
        const response = await fetch(`${baseUrl}/products/${id}`);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// POST
if (method === 'POST' && endpoint === 'products') {
    try {
        const response = await fetch(`${baseUrl}/products`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, price: Number(price), category })
        });
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// DELETE
if (method === 'DELETE' && endpoint === 'products' && id) {
    try {
        const response = await fetch(`${baseUrl}/products/${id}`, {
            method: 'DELETE'
        });
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error.message);
    }
}