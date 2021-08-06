fetch("https://api.hubstaff.com/v2/users/me")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
          });
        
      