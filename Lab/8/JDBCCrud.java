import java.sql.*;  
import java.util.*;
public class JDBCCrud{  
    public static void main(String args[]){  
        Scanner in=new Scanner(System.in);
        String url = "jdbc:mysql://localhost:3306/ak";
        String username="root";
        String password="root";
        try{  
            Class.forName("com.mysql.cj.jdbc.Driver");  
            Connection con=DriverManager.getConnection( url,username,password); 
            if(con!=null){
                System.out.println("Connected.");
            }  
            System.out.println("1.Insert  2.Delete  3.Update  4.Retrieve  5.Exit");
            while(true){
                System.out.println("Your choice...");
                int ch=in.nextInt();
                switch(ch){
                    case 1 :    System.out.println("Enter id and name to insert :");
                                int id1=in.nextInt();
                                String name1=in.next();
                                String q1="insert into emp values ("+id1+",'"+name1+"');";
                                Statement stmt1=con.createStatement();
                                int c1=stmt1.executeUpdate(q1);
                                if(c1>0) System.out.println("Inserted successfully.");
                                else System.out.println("Not inserted.");
                                break;

                    case 2 :    System.out.println("Enter id of record to be deleted : ");
                                int id2=in.nextInt();
                                String q2="delete from emp where id="+id2+";";
                                Statement stmt2=con.createStatement();
                                int c2=stmt2.executeUpdate(q2);
                                if(c2>0) System.out.println("Deleted successfully.");
                                else System.out.println("Not deleted.");
                                break;

                    case 3 :    System.out.println("Enter id,name and new name to be updated : ");
                                int id3=in.nextInt();
                                String name3=in.next();
                                String name31=in.next();
                                String q3="update emp set name='"+name31+"' where id="+id3+" and name='"+name3+"';";
                                Statement stmt3=con.createStatement();
                                int c=stmt3.executeUpdate(q3);
                                if(c>0) System.out.println("Updated successfully.");
                                else System.out.println("Not updated.");

                    case 4 :    String q4="select * from emp;";
                                Statement stmt4=con.createStatement();
                                ResultSet rs=stmt4.executeQuery(q4);
                                while(rs.next()) System.out.println(rs.getInt(1)+" "+rs.getString(2));
                                break;
                    
                    case 5 :    System.out.println("Exiting...");
                                System.exit(0);

                }
            }
        }
        catch(Exception e){
             System.out.println(e);
        }  
    }  
}  