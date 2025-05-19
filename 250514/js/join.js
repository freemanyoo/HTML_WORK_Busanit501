document.getElementById('signupForm').addEventListener('submit', function (e) {
    e.preventDefault();  
    const formData = new FormData(this); 
    let output = "" 
    output += `출력되는 유저명 : ${formData.get('username')} \n`
    
    output += `출력되는 패스워드 : ${formData.get('password')}\n`
    const hobbies = formData.getAll('hobby')
    
    output += `출력되는 취미들: ${hobbies.join(', ')}\n`
    output += `출력되는 성별 : ${formData.get('gender')}\n`
    output += `출력되는 나이 : ${formData.get('age')}\n`
    output += `출력되는 생년월일 : ${formData.get('date')}\n`
    output += `출력되는 이메일 : ${formData.get('email')}\n`
    const file = formData.get('file')
    output += `출력되는 첨부파일명 : ${file && file.name ? file.name : '파일없음'}\n`
    output += `출력되는 히든의 요소 : ${formData.get('user_id')}\n`
    document.getElementById('output').textContent = output
})
document.getElementById('signupForm').file.addEventListener('change',
    function () { 
        const file = this.files[0]
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = function (e) {
                document.getElementById('profilePreview').src = e.target.result;
            }
            reader.readAsDataURL(file)
        }
    }
)