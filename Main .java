
import java.util.Scanner;
class Main{
  public static void main(String args[])
  {
    int a,b,c;
    Scanner sc = new Scanner(System.in);
    System.out.println("enter a: ");
    a=sc.nextInt();
    System.out.println("enter b: ");
    b=sc.nextInt();
    
    try
    {
        
       c=a/b;
       System.out.println("add is : "+c);
    }
    catch(Exception e){
        System.out.println("cant divide by zero");
    }
    System.out.println("Rest of the code");
    
  }
    
}