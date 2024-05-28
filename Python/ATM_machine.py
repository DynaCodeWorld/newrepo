print("{**WELCOME TO MY BANK ATM **}")
class Detail():
    def __init__(self,name ,age,adress):
        self.name=name
        self.age=age
        self.adress=adress
    def userdetails(self):
        print(f"""
                  username -- {self.name}
                  userage  -- {self.age}
                  useradress--{self.adress}""")
# class Bank(Detail):
    # def Password(self):
        # passt=1234
        # if
class Bank(Detail):
    def __init__(self,name,age,adress,amount):
        super().__init__(name,age,adress)
        self.amount=amount
    def deposit(self):
        self.userdetails()
        deposit=int(input("*Enter deposit amount ==  "))
        self.amount=self.amount+deposit
        print(f"amount amount is {self.amount}")
    def withdrow(self):
        withdrw=int(input("**Enter withdrw amount == "))
        self.amount=self.amount-withdrw
        print(f"amount amount is {self.amount}")
b=Bank("Rudra",27,"Nimapur",0)

class final(Bank):
   
        def f(self):
             self.userdetails()
             while True:
                print("""choose any      
                                        deposit = 1
                                        withdrow = 2
                                        totalamount =3""")
                ch=int(input("choise here :: "))
             
                if ch==1:
                    print('youchoose deposit')
                    self.deposit()
                elif ch==2:
                    print('youchoose withdrow')
                    self.withdrow()
                elif ch==3:
                    print("you choose total amount")
                    print(f"amount  is :: {self.amount}")
                else:
                    print("Thank for visit our ATM")
                    break

print("conform your identity")                               
print()
name=input("Enter yout name ::  ")
age=int(input("Enter yout age ::  "))
adress=input("Enter yout adress ::  ")

f=final(name,age,adress,1000)
f.f()
        


