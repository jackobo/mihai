interface IAnimal{
    readonly name: string;
    run(): void;
}


abstract class Dog implements IAnimal {
    abstract getSpeed(): number;

    run(): void {
        console.log(this.name + " is running with speed " + this.getSpeed());
    }

    readonly name: string = "Dog";


}

class K9 extends Dog {

    readonly name: string = "K9 Dog";

    getSpeed(): number {
        return 10;
    }

}

class Corcitura extends Dog{

    readonly name: string = "Corcitura";

    getSpeed(): number {
        return 2;
    }
}

class Tiger implements IAnimal{
    run(): void {
        console.log("Tiger is running");
    }
    readonly  name= "Tiger";
}

interface AnimalComponentProps {
    animal: IAnimal;
}

function AnimalComponent(props: AnimalComponentProps){
    const onClickHandler = () => {
        props.animal.run();
    }
    return(
        <div onClick={onClickHandler}>
            {"Make " + props.animal.name + " run"}
        </div>
    )
}

interface IProduct {
    name: string;
    price: number;
}
interface ProductComponentProps{
    product: IProduct;
}

function ProductComponent(props: ProductComponentProps){
    return(
        <div>
            <span>{props.product.price}</span>
            <span>{props.product.name}</span>
        </div>
    )
}


export const TypeScriptTests = () => {
    let arr: IProduct[] = [
        {
            name: "Mere",
            price: 20
        },
        {
            name: "Pere",
            price: 15
        },
        {
            name: "Gutui",
            price: 25
        },
    ];

    return (
        <div>
            {arr.map(p => <ProductComponent key={p.name} product={p}/>) }
        </div>
    )



}


