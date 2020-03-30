class Example {
public static String getField(String message, int index){
    String[] array=new String[message.length()];
    String sindex="";
    int count=0;
    for (int i=0; i<message.length();i++)
    {
        if(message.charAt(i)=='|')
        {
            array[count]=sindex;
            count++;
            sindex="";
        }
        else{
            sindex+=message.charAt(i);
        }
    }

    return array[index];
}
public static void main(String[] args){
    String ans=getField("WITHDRAWAL|0|USD062605|135792468013|1234",4);
    System.out.println(ans);
}
}