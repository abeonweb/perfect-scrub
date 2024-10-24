// Form Submit Control
// Purpose: Submit form data to Netlify server & show status to user


export function submitHandler(form, formName) {
    
    // form data sent to Netlify server
    const formData = new FormData(form);
    formData.append("form-name", formName);
    // const data = Object.fromEntries(formData)
    const body = new URLSearchParams(formData).toString()
    fetch('/', {
        method: 'POST',
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body
    })
    .then(handleErrors)
    .catch((error) => {
        
    });
};

// Error Handler
function handleErrors(response) {
    // throws an error if HTTP response failed
    if (!response.ok) {
        throw Error(response.statusText)
    }
    return response;
}