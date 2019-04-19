class Members {
    constructor(name, role){
        
        this.name = this.teamMember.querySelector(".name");
        this.role = this.teamMember.querySelector(".role");
        this.members = [];
    }
    isMember() {
        console.log(`${this.name} is a ${this.role} person.`)
    }
    addMember(name, role){
        this.members.push(name, role);
    }
}



let members = Array.from(document.querySelectorAll('.teamMember'));
members.forEach(teamMember => {
    return new Members(teamMember);
});