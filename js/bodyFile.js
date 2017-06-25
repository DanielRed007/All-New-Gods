
window.addEventListener("load", eventWindowLoaded, false);
    function eventWindowLoaded () {
            //nueva instancia del objeto control.
            pageAdmin["elderControl"] = new Control();
            //metodo para asignar la fecha en la parte superior.
            pageAdmin["elderControl"].controlDate("date");
            //metodo para implementar el sistema de comentarios del blog.
            //esta variable selecciona el botón del controlador con un evento DOM 0
            var commentAdder = function(idButton){
                var button = document.getElementById(idButton);
                button.onclick = function(){
                    pageAdmin["elderControl"].commentController("addUser","addInput","commentUnit","commentList","commentLeft");
                };
            };

            commentAdder("addButton");
            
        }

//objeto para controlar todo el comportamiento de la página
var pageAdmin = {};

function Control(){
    
    this.controlDate = function(datepanel){
        //variable que convoca in Id genreico
    var dElement = document.getElementById(datepanel);
        //variable que convoca nueva fecha
    var date = new Date();
        //tres variables para dia, mes y año
    var year = date.getFullYear();
    var month = date.getMonth();
    var day = date.getDate();
    switch (month){
        case 0:
            month = "January";
            break;
        case 1:
            month = "February";
            break;
        case 2:
            month = "April";
            break;
        case 3:
            month = "March";
            break;
        case 4:
            month = "May";
            break;
        case 5:
            month = "June";
            break;
        case 6:
            month = "July";
            break;
        case 7:
            month = "August";
            break;
        case 8:
            month = "September";
            break;
        case 9:
            month = "October";
            break;
        case 10:
            month = "November";
            break;
        case 11:
            month = "December";
            break;
    }
        //salida generica de HTML
    dElement.innerHTML = "<p>" + month + "   " + day +  "  " + year + "</p>";
    };
    
    //controlador de la generación de comentarios y registro de usuarios del blog de discusión
    this.commentController = function(userId,textAreaId,commentCSS,commentBlock,listCSS){
        var comment = document.createElement("li");
        var userName = document.getElementById(userId).value;
        var textArea = document.getElementById(textAreaId).value;
        var finalText = document.createTextNode("#" + userName + " says: " + textArea);
        comment.className = commentCSS;
        comment.appendChild(finalText);
        if(userName === "" || textArea === ""){
            alert("User and Password must be complete");
        } else {
            document.getElementById(commentBlock).appendChild(comment);
        }
        document.getElementById(userId).value = "";
        document.getElementById(textAreaId).value = "";
    };

}

