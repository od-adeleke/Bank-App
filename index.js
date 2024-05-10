let david = {
  name: "David Adeleke",
  accountNumber: 9876543210,
  balance: 100000,
  pin: 4321,
  bank: "Opay",
};

let funmi = {
  name: "Funmi Adeleke",
  accountNumber: 1234567890,
  balance: 100000,
  pin: 4321,
  bank: "Opay",
};

function app() {
    // start app
  const start = prompt(`Insert your card by typing 'yes'`);

  if (start) {
    // request PIN
    const pin = parseInt(prompt(`Please insert your pin:`));

    // verify PIN
    if (pin === david.pin) {
      const status = parseInt(
        prompt(`Type 1 to withdraw
            Type 2 to transfer`)
      );

      if (status === 1) {
        alert("service not available");
      }
      if (status === 2) {

        // request for account deets
        const receiverAccount = parseInt(
          prompt(`Please enter receiver's account number:`)
        );

        // verify account deets
        if (receiverAccount === funmi.accountNumber) {
          // const bank = parseInt(prompt(`Please select a bank:
          //     1: UBA
          //     2: Opay
          //     3: Kuda
          //     4: Firstbank`))
          const bank = prompt(`Please enter receiver's bank`);
          // if (bank === 1 || 3 || 4) {
          //     alert('Account not found')
          // }

        //   verify bank

          if (bank === funmi.bank) {
            const verify = prompt(`Please confirm receiver details
                            Name: ${funmi.name}
                            Account Number: ${funmi.accountNumber}
                            Bank: ${funmi.bank}`);

            if (verify) {
              const transferAmount = parseInt(prompt(`Enter transfer amount`));

              if (transferAmount) {
                const cpnfirmation = confirm(`Are you sure?
                                    Name: ${funmi.name}
                                    Account Number: ${funmi.accountNumber}
                                    Bank: ${funmi.bank}
                                    Amount: ${transferAmount}`);

                if (cpnfirmation) {
                  // update balances
                  david.balance -= transferAmount;
                  funmi.balance += transferAmount;

                  alert("Transfer successful");
                  alert(`Sender's previous balance: ${david.balance}
                                        New Balance: ${david.balance}
                                        
                                        Receiver's previous balance: ${funmi.balance}
                                        New Balance: ${funmi.balance}`);
                }
              }
            }
          } else alert("Wrong bank, account not found");
        } else {
          alert("Account not found");
        }
      }
    } else {
      alert("Incorrect PIN");
    }
  }
}

app();
