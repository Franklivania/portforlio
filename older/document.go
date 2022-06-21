package main
import "fmt"

func main(){
	var a int;
	var b int;
	var c int;

	fmt.Scanln(&a);
    fmt.Scanln(&b);
    fmt.Scanln(&c);

	switch{
	case a==0:
		fmt.Println("Zero")
	case a==1:
		fmt.Println("One")
	case a==2:
		fmt.Println("Two")
	case a==3:
		fmt.Println("Three")
	case a==4:
		fmt.Println("Four")
	case a==5:
		fmt.Println("Five")
	case a==6:
		fmt.Println("Six")
	case a==7:
		fmt.Println("Seven")
	case a==8:
		fmt.Println("Eight")
	case a==9:
		fmt.Println("Nine")
	case a==10:
		fmt.Println("Ten")
	default:
		fmt.Println(a)
	}
	switch{
	case b==0:
		fmt.Println("Zero")
	case b==1:
		fmt.Println("One")
	case b==2:
		fmt.Println("Two")
	case b==3:
		fmt.Println("Three")
	case b==4:
		fmt.Println("Four")
	case b==5:
		fmt.Println("Five")
	case b==6:
		fmt.Println("Six")
	case b==7:
		fmt.Println("Seven")
	case b==8:
		fmt.Println("Eight")
	case b==9:
		fmt.Println("Nine")
	case b==10:
		fmt.Println("Ten")
	default:
		fmt.Println(b)
	}
	switch{
	case c==0:
		fmt.Println("Zero")
	case c==1:
		fmt.Println("One")
	case c==2:
		fmt.Println("Two")
	case c==3:
		fmt.Println("Three")
	case c==4:
		fmt.Println("Four")
	case c==5:
		fmt.Println("Five")
	case c==6:
		fmt.Println("Six")
	case c==7:
		fmt.Println("Seven")
	case c==8:
		fmt.Println("Eight")
	case c==9:
		fmt.Println("Nine")
	case c==10:
		fmt.Println("Ten")
	default:
		fmt.Println(c)
	}
}