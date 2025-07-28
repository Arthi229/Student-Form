
        function add(){
            var name=document.getElementById("name").value
            var age=document.getElementById("age").value
            var course=document.getElementById("course").value
            var gender=document.querySelector('input[name="gender"]:checked').value
            var email=document.getElementById("email").value

            if(!name||!age||!course||!gender||!email)
            {
                alert("please fill all details!")
                return
            }
        
            var table2=document.getElementById("table2")
            var row=table2.insertRow()

            row.innerHTML=`<td>${name}</td> <td>${age}</td> <td>${course}</td> <td>${gender}</td> <td>${email}</td> <td><button class="deletebtn" onclick="deleteitem(event)">Delete</td>`
                        // Clear form fields after saving
            document.getElementById("name").value = ""
            document.getElementById("age").value = ""
            document.getElementById("course").selectedIndex = 0
            document.getElementById("email").value = ""

            // Uncheck gender radio buttons
            let genderRadios = document.getElementsByName("gender")
            for (let i = 0; i < genderRadios.length; i++) {
                genderRadios[i].checked = false
            }
            }
        
        function deleteitem(event)
        {
            event.target.parentElement.parentElement.remove()
        }

