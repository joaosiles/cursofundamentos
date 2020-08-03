
function formataCNPJ(v) {
    const cnpjCpf = v.replace(/\D/g, '');
if (cnpjCpf.length === 11) {
    return v.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "\$1.\$2.\$3-\$4");
    
}
return v.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g, "\$1.\$2.\$3/\$4-\$5");

}

alert(formataCNPJ('11111111111111'));