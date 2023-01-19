/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.omar.mycv;
import java.io.*;
import java.util.*;
import javax.mail.*;
import javax.mail.internet.*;
import javax.activation.*;
import javax.servlet.http.*;
import javax.servlet.*;
/**
 *
 * @author omerfaruk
 */
public class sendEmail {
    public static String mailInfo(String name, String mail, String project){
    String to = "teknopluse12@gmail.com";
    String from = "mysite9564@gmail.com";
    
    String messageText = "Name: " + name + "\n" + "E-Mail: " + mail + "\n" + "Project: " + project + "\n";
    
    final String username = "mysite9564@gmail.com";
    final String password = "pktkfmkqrvtenheb";
    
    String reddirectURL = "index.html";
    
    String host = "smtp.gmail.com";
    
    Properties prop = new Properties();
    prop.put("mail.smtp.auth", "true");
    prop.put("mail.smtp.starttls.enable", "true");
    prop.put("mail.smtp.host", host);
    prop.put("mail.smtp.port", "587");
    
    Session session1 = Session.getInstance(prop, new javax.mail.Authenticator(){
       protected PasswordAuthentication getPasswordAuthentication(){
           return new PasswordAuthentication(username, password);
       }
    });
    try{
        Message message = new MimeMessage(session1);
        message.setFrom(new InternetAddress(from));
        message.setRecipient(Message.RecipientType.TO, new InternetAddress(to));
        message.setSubject("Message from your web site");
        message.setText(messageText);
        Transport.send(message);
                
        
    }
    catch(Exception e){
        System.out.println(e);
        return e.toString();
    }
    
    return "okBYA";
}
   


}