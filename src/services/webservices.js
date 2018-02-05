export function PostData(type, userData) {
    console.log(userData)
    let BaseURL = 'https://api.coinmarketcap.com/v1/ticker/';
     return new Promise((resolve, reject) =>{
        fetch(BaseURL, {
            method: 'GET',
         })
        .then((response) => response.json())
        .then((res) => {
            resolve(res);
        })
        .catch((error) => {
            reject(error);
        });
    });
}
