const formatValue = (value : string | number | boolean) => {
  if( typeof value == 'string')
        return value.toUpperCase();
  if( typeof value == 'number')
        return value * 10;
  if( typeof value == 'boolean')
        return !value;
}


const getLength = (value : string | any []) => {
      if(typeof value == 'string')
         return value.length;
      if(Array.isArray(value))
         return value.length;
}


class Person {
      name:string;
      age: number;
      constructor(name:string, age: number){
            this.name = name;
            this.age = age;
      }
      getDetails() {
           return `'Name: ${this.name}, Age: ${this.age}'`
      }
}


type TItem = {
            title: string,
            rating: number
      }

const filterByRating = (items: TItem[]):TItem[] => {
     return items.filter(item => item.rating >= 4)
}


type TUsers = {
      id:number,
      name:string,
      email:string,
      isActive:boolean
}

const filterActiveUsers = (users: TUsers[]):TUsers[] => {
      return users.filter(user => user.isActive === true);
}


interface Book {
      title: string,
      author: string,
      publishedYear: number,
      isAvailable: boolean
}

class CBook implements Book {
      title: string;
      author: string;
      publishedYear: number;
      isAvailable: boolean;
      constructor(title: string, author: string, publishedYear: number, isAvailable: boolean) {
            this.title = title; this.author = author; this.publishedYear = publishedYear; this.isAvailable = isAvailable;
      }
}

const printBookDetails = (book: Book) => {
      return  console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${book.isAvailable}`);
   }



const getUniqueValues = (items1: number[], items2: number[]) => {
      let result = []; let nIndex= 0;
      for(let i=0; i<items1.length; i++) {
            result[nIndex] = items1[i];   
            nIndex++;
      }                       
      for(let j=0; j<items2.length; j++)
      {
         let bExist = false;   
         for(let k=0; k<result.length; k++)   
         {
          if(result[k] === items2[j])
          {
            bExist = true;
            break;
          }
         }
         if(!bExist){
            result[nIndex] = items2[j]
            nIndex++;
         }
      }     

      return result;
}


type TProduct = {
      name: string,
      price: number,
      quantity:number,
      discount?: number
}

const calculateTotalPrice = (product: TProduct[]):number => {
    return product.reduce((total, prd) => 
      {  
         const beforeDiscount = prd.quantity * prd.price;            
         const afterDiscount = prd.discount? beforeDiscount - (beforeDiscount * prd.discount / 100) : beforeDiscount  ;
         return total + afterDiscount; 
      },0);
}



