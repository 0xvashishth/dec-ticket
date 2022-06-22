const Ticket_Manage = artifacts.require("Ticket_Manage");

module.exports = async function (deployer) {
    // Deploy Ticket_Manage
    await deployer.deploy(Ticket_Manage);
};
