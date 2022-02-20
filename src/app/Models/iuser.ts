export interface IUser {
  id:string,
  name:string,
  email:string,
  password:string,
  mobile:string[],
  address:{
    city:string,
    street:string,
    postalCode:string
  }
  delivery:string,
  specificDayDel:string
}
