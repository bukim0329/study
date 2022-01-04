/**
 * @param {string[]} emails
 * @return {number}
 */
 var numUniqueEmails = function(emails) {
    const ans = Array();
    function getLocalName(email) {
        email = email.slice(0, email.indexOf('@'));
        email = email.split('.').join('');
        if (email.includes('+'))
            email = email.slice(0, email.indexOf('+'));
        return email;
    }
    function getDomainName(email) {
        return email.slice(email.indexOf('@') + 1);
    }
    const arr = emails.map(email=>{
        const local = getLocalName(email);
        const domain = getDomainName(email);
        ans.push(local + '@' + domain);
    });
    return (new Set(ans)).size;
};