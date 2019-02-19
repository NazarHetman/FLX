function userCard (index) {
    let balance = 100;
    let transactionLimit = 100;
    let historyLogs = [];
    return {
        getCardOptions: function() {
            return {
                balance: balance,
                transactionLimit: transactionLimit,
                historyLogs: historyLogs,
                key: index
            }
        },
        putCredits: function(credits) {
            balance = balance + credits;
            historyLogs.push({
                operationType: 'Received credits',
                credits: credits,
                operationTime: new Date().toLocaleString()
            });
        },
        takeCredits: function(credits) {
            if (balance < credits) {
                console.error('Not enough money');
            } else if (transactionLimit < credits) {
                console.error('Amount is bigger that transaction limit');
            } else {
                balance = balance - credits;
            }
            historyLogs.push({
                operationType: 'Withdrawal of credits',
                credits: credits,
                operationTime: new Date().toLocaleString()
            });
        },
        setTransactionLimit: function(newLimit) {
            transactionLimit = newLimit;
            historyLogs.push({
                'operation Type': 'Transaction limit change',
                'credits': newLimit,
                'operationTime': new Date().toLocaleString()
            });
        },
        transferCredits: function(transfer, card) {
            let tax = 1.05;
            let transferAmount = transfer * tax;
            if (balance < transferAmount) {
                console.error('Not enough money');
            } else if (transactionLimit < transferAmount) {
                console.error('Amount is bigger that transaction limit');
            } else {
                this.takeCredits(transferAmount);
                card.putCredits(transfer);
            }
        }
    }
}
class UserAccount {
    constructor(name) {
        this.name = name;
        this.cards = [];
    }
    addCard() {
        let maxCards = 3;
        if (this.cards.length > maxCards) {
            console.error('Maximum 3 cards allowed');
        } else {
            this.cards.push(userCard(this.cards.length + 1));
        }
    }
    getCardByKey(key) {
        return this.cards[key - 1];
    }
}