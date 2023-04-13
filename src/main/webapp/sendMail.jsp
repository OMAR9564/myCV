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
        name = new String(request.getParameter("name").getBytes("ISO-8859-9"), "UTF-8");
        String mail = "";
        mail = new String(request.getParameter("mail").getBytes("ISO-8859-9"), "UTF-8");
        String project = "";
        project = new String(request.getParameter("text").getBytes("ISO-8859-9"), "UTF-8");

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
