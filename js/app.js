console.log('working')

var formExp = new Vue({
    el: '#formExp',

    data: {
        exp_types: '',
        expenditure: '',
        amount: 0,
        all_expenditure: []
    },

    methods: {
        onSubmit() {
            this.all_expenditure.push({exp_types: this.exp_types, expenditure: this.expenditure, amount: this.amount});
            this.clearForm();

        },

        clearForm() {
            this.exp_types = ''
            this.expenditure = '',
            this.amount = 0
        }
    },

    computed: {

    }
});

var expTable = new Vue({
    el: '#expTable',
    data: {
        all_expenditure: formExp.all_expenditure
    }
});

var incomeForm = new Vue({
    el: '#incomeForm',
    data: {
        income_type: '',
        amount: 0,
        all_income: []
    },

    methods: {
        onSubmit() {
            this.all_income.push({income_type: this.income_type, amount: this.amount});

            this.clearForm()
        },

        clearForm() {
            this.income_type = ''
            this.amount = 0
        }
    }
});

var incomeTable = new Vue({
    el: '#incomeTable',
    data: {
        all_income: incomeForm.all_income
    }
});

var payrollForm = new Vue({
    el: '#payrollForm',
    data: {
        name: null,
        staffNo: null,
        rank: null,
        gross: null,
        deductions: null,
        netPay: null,
        all_payroll: []
    },

    methods: {
        onSubmit() {
            this.all_payroll.push({name:this.name, staffNo:this.staffNo, rank:this.rank, gross:this.gross, deductions:this.deductions, netPay:this.netPay})

            this.clearForm()
        },

        clearForm() {
            this.name = null
            this.staffNo = null
            this.rank = null
            this.gross = null
            this.deductions = null
            this.netPay = null
        }
    }
});

var payrollTable = new Vue({
    el: '#payrollTable',
    data: {
        all_payroll: payrollForm.all_payroll
    }
});
