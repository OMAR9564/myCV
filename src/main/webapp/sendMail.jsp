<%-- 
    Document   : sendMail
    Created on : Dec 12, 2022, 4:34:28 PM
    Author     : omerfaruk
--%>

<%@page import="com.omar.mycv.sendEmail"%>
<%@ page import = "java.io.*,java.util.*,javax.mail.*"%>
<%@ page import = "javax.mail.internet.*,javax.activation.*"%>
<%@ page import = "javax.servlet.http.*,javax.servlet.*" %>
<!--<form id="myForm" method="post">
   <input type="text"name="name" value="" hidden=""> comment 
<input type="text" name="mail" value="" hidden=""> 
</form>
<script>
function myFunction() {
  document.getElementById("myForm").submit();
}
myFunction();
</script>-->
<%

        String name = "";
        name = request.getParameter("name");
        String mail = "";
        mail = request.getParameter("mail");
        String project = "";
        project = request.getParameter("text");

        System.out.println(name + " " + mail);
    try {
        if (!(name == "" || mail == "" || project == "" || name == null || mail == null || project == null)) {

            String isSend = sendEmail.mailInfo(name, mail, project);

            if (isSend.equals("okBYA")) {

                response.sendRedirect("index.jsp");
            } else {
                sendEmail.mailInfo("hata", "hata", "birisi sana mail gödnerdiğinde bir hata oluştu");
                out.println(isSend);
            }

        } else {
            sendEmail.mailInfo("hata", "hata", "birisi sana mail gödnerdiğinde bir hata oluştu");
            response.sendRedirect("index.jsp");
        }
    }catch (Exception e){
        out.println(e);
    }
%>
