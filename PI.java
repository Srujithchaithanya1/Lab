interface mypi{
    double getPI();
}
public class PI {
    public static void main(String[] args){
        mypi ob = ()->Math.PI;
        System.out.println("PI Value : "+ob.getPI());
    }
}