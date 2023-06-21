function dangKy(){
    var email = document.getElementById("txtEmail").value;
    var tenDangNhap = document.getElementById("txtName").value;
    var matKhau = document.getElementById("txtPass").value;
    var passCofirm = document.getElementById("txtPassCofirm").value;
    var sdt = document.getElementById("txtPhone").value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var emailPattern = /[a-z0-9._%+\-\*]+@[a-z0-9.\-]+\.[a-z]{2,4}$/;
    if (!emailPattern.test(email)) {
      alert("Email không hợp lệ.");
      return false;
    }
    
    if (matKhau !== passCofirm) {
      alert("Mật khẩu không khớp.");
      return false;
    }
    const userData = {
        email: email,
        password: matKhau,
        name: tenDangNhap,
        gender: gender == "1" ? true : false,
        phone: sdt,
      };
      axios.post('https://shop.cyberlearn.vn/api/Users/signup', userData)
     
    .then(function(response){
      var result = response.data.content;
      localStorage.setItem('accessToken', result.accessToken);
    }).catch(function(error){
        console.log(error.response)
      alert(error.response.data.message);
    });
    }
    
    function dangNhap(){
    var email = document.getElementById("txtEmail1").value;
    var matKhau = document.getElementById("txtPass2").value;
    var dangNhap = {
      email: email,
      password: matKhau,
    };
    axios({
        method:'POST',
        url:"https://shop.cyberlearn.vn/api/Users/signin",
        data: dangNhap
      }).then((response) =>{
        localStorage.setItem('accessToken', response.data.content.accessToken);
        
        axios.post("https://shop.cyberlearn.vn/api/Users/getProfile", {}, {
          headers:{
            Authorization: `Bearer ${response.data.content.accessToken}`,
          },
        }).then((response)=>{
          console.log(response);
          const{
            name,
            email,
            gender,
            phone,
            password
          } = response.data.content;
          
          const avartarObject = {
            name: name,
            email: email,
            gender: gender,
            phone: phone,
            password: password,
          };
          
          localStorage.setItem("avartarObject", JSON.stringify(avartarObject));
          window.location.replace("https://example.com/index.html")
        }).catch((error)=>{
            console.log(error);
        });
      })
      .catch((error) =>{
          console.log(error);
      });
    }
      
    