var count=0;
var authorName;
function addPost2(){
                
                console.log(count);
        
                var division=document.createElement("div");
                var node_div=document.createTextNode("");
                    
                header1="By: Cooper Hollmaier May 21, 2021";
                header2="Web Content Accessibility Guidelines: What They Are and Why SEOs Should Care"
                paragraph="In this blog, we’ll take a closer look at Web Content Accessibility Guidelines (WCAG), and outline the steps you can take to meet its standards. We’ll also touch on the reasons why accessible websites typically rank higher in search engines — making accessibility the right choice all around! ";
                temptableHolder= '<img src="image/SEOGeneral.jpg" width="650px" height="250px"/>'+
                    '<h4>' + header1+ '</h4>' 
                    + '<h1>'+header2+'</h1>' 
                    + '<p>'+paragraph +'</p>';
                    
                division.appendChild(node_div);
                    
                var element = document.getElementById("d1");
                var child = document.getElementById("b"+count);
                    
                element.insertBefore(division,element.childNodes[0]);  
                    
                division.classList.add("block1");
                division.innerHTML  =temptableHolder ; 
                count++;
}
function makeFormVisible(){
                var division=document.createElement("div");
                var node_div=document.createTextNode("");
    
                temptableHolder= 
                    '<h1 style="color: royalblue;text-align: center">'+'Blog Post Submission Form'+'</h1>'+
                    '<form id="authorInfo1" >'+
                
                        '<h3 style="color: royalblue;">'+'Author Details'+'</h3>'+
                        '<p><b>Please enter your contact details so that we can give you the proper credit for your blog post</b></p>'+
                        '<label>Name</label>&nbsp; <input type="text" name="yname">'+
                        '<br/><br/>'+
                        '<label>Short Author Bio</label><br/><br/>'+
                        '<textarea id="AuthorBio" name="AuthorBio" rows="2" cols="80"></textarea><br/>'+
                        '<small>Please keep it below 100 characters</small>'+
                        '<br/><br/>'+
                        '<h3 style="color: royalblue;">Create a Blog Post</h3>'+
                        '<p><b>Please submit your guest blog post</b></p>'+
                        '<label>Featured Image</label>&nbsp;'+
                        '<input type="file" id="myFile" name="filename">'+
                        '<br/><br/>'+
                
                        '</form>'+
                        '<form id="postContent1">'+
                            '<label>Post Header</label><br/><br/>'+
                            '<textarea id="Header" name="Header" rows="2" cols="80"></textarea>'+
                            '<br/><br/>'+
                            '<label>Brief Post Content</label><br/><br/>'+
                            '<textarea id="briefContent" name="briefContent" rows="3" cols="80"></textarea><br/>'+
                            '<small>Please keep it below 200 characters</small>'+
                            '<br/><br/>'+
                            '<label>Post Content</label><br/><br/>'+
                            '<textarea id="content" name="content" rows="4" cols="80"></textarea>'+
                            '<br/>'+

                        '</form>'+
                    '<button onclick="readAddedBlogContent()" style="margin-left: 650px; padding:10px; background-color: royalblue;color: white">Save Content</button>'+'<br/><br/>';
                    
                
                    
                division.appendChild(node_div);
                var element = document.getElementById("contentBlog");
                element.innerHTML  =temptableHolder;  
        
}

var authorMail, authorBio, blogHeader,briefContent,postContent;
function readAddedBlogContent(){
    
      authorName= document.getElementById("authorInfo1").elements.namedItem("yname").value;
    console.log(authorName)
    
      
    
      authorBio= document.getElementById("authorInfo1").elements.namedItem("AuthorBio").value;
    console.log(authorBio)
    
     blogHeader = document.getElementById("Header").value;
    console.log(blogHeader)
    
     briefContent = document.getElementById("briefContent").value;
    console.log(briefContent)
    
     postContent = document.getElementById("content").value;
     console.log(postContent)
    
    var date = new Date();
    var today = date.toDateString();
    console.log(today);
    localStorage.setItem("authorName",authorName)
   
    localStorage.setItem("authorBio",authorBio)
    localStorage.setItem("date",today)
    localStorage.setItem("blogHeader",blogHeader)
    localStorage.setItem("briefContent",briefContent)
    localStorage.setItem("postContent",postContent)
   
    var msgDiv=document.getElementById("message");
    msgDiv.innerHTML  ="Content saved successfully!"
        
    document.getElementById("authorInfo1").reset();
    document.getElementById("postContent1").reset();
    
    var invisible=document.getElementById("contentBlog");
    invisible.innerHTML  ="";
        
    
    //location.href = "blog.html";
    
    
    
}


function addPost1(){
                var msgDiv=document.getElementById("message");
                msgDiv.innerHTML  =""
                console.log(count);
                count++;
                console.log(authorName);
        
                var division=document.createElement("div");
                var node_div=document.createTextNode("");
                    
                header1=localStorage.getItem("authorName");
                date= localStorage.getItem("date");
                header2=localStorage.getItem("blogHeader");
                paragraph=localStorage.getItem("briefContent");
                temptableHolder= '<img src="images/SEOGeneral.jpg" width="650px" height="300px"/>'+
                    '<h4> By:' + header1+ '&nbsp;&nbsp;&nbsp;'+date+'</h4>' 
                    + '<h1 style="color: royalblue;">'+header2+'</h1>' 
                    + '<p>'+paragraph +'</p>'+'<br/>'+'<br/>'
                    +'<button id="readPost" style="background-color:royalblue; padding:10px; color:white;">Read this post</button>'
                    +'&nbsp&nbsp&nbsp'
                    +'<button id="deletePost" style="background-color:orangered; padding:10px; color:white;">Delete this post</button>';
                    
                division.appendChild(node_div);
                   
                var element = document.getElementById("d1");
                var child = document.getElementById(count);
                    
                element.insertBefore(division,element.childNodes[0]);  
                
                division.classList.add("block");
                division.setAttribute("id",count);
                division.innerHTML  =temptableHolder;  
                document.getElementById("deletePost").setAttribute("onclick", "deleteTag("+count+")");
}

function deleteTag(idValue) {
    console.log("Event fired..."+idValue);
    var obj = document.getElementById(idValue);
    obj.remove();
}

function login(){
    var username= document.getElementById("uname").value;
    console.log(username);
    var password= document.getElementById("pword").value;
    console.log(password);
    if(username=="admin" && password=="12345"){
        location.href = "blog.html";
    }
}


















