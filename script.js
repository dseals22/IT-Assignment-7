var Person= {}; 

Person.Character= function(firstName, lastName, gender, age) 
{ 
    this.FirstName= firstName;
    this.LastName= lastName;
    this.Gender= gender; 
    this.Age= age;  
} 

Person.Character.prototype.GetAllInformation= function() 
{
      return this.FirstName + " " + this.LastName + " "  + this.Gender + " "  + 
       + this.Age;   
}

Person.Zack = new Person.Character("Zack", "Efron", "Male", 29); 
Person.Shia = new Person.Character("Shia", "Labeouf","Male", 30);  


document.getElementById("demo1").innerHTML = Person.Zack.GetAllInformation(); 

document.getElementById("demo2").innerHTML = Person.Shia.GetAllInformation(); 


