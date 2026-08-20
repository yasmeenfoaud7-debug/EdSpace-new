
const signupForm = document.getElementById('signupForm');
if (signupForm) {
    signupForm.addEventListener('submit', async function(e) {
        e.preventDefault(); 

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        try {
            const response = await fetch('http://localhost:5000/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email })
            });

            const data = await response.json();
            
            if (response.ok) {
                alert('تم التسجيل بنجاح!');
                console.log(data);
            } else {
                alert('خطأ: ' + data.message);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('تعذر الاتصال بالسيرفر');
        }
    });
}


const loginBtn = document.getElementById('loginBtn');
if (loginBtn) {
    loginBtn.addEventListener('click', async function(e) {
        e.preventDefault();

        const email = document.getElementById('emailInput').value;
        const password = document.getElementById('passwordInput').value;

        try {
            const response = await fetch('http://localhost:5000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();

            if (response.ok) {
                alert('تم تسجيل الدخول بنجاح!');
                console.log(data);
            } else {
                alert('خطأ: ' + data.message);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('تعذر الاتصال بالسيرفر');
        }
    });
}