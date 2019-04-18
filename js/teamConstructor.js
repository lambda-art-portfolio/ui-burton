class Members {
    constructor(teamMember){
        this.teamMember = teamMember;
        this.name = this.teamMember.querySelector(".name");
        this.role = this.teamMember.querySelector(".role");

    }
}



let members = Array.from(document.querySelectorAll('.teamMember'));
members.forEach(teamMember => {
    return new members(teamMember);
});