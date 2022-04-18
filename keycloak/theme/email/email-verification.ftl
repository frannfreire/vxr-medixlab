<html>
<body>
    <div style="padding-top: 12px; padding-bottom: 12px; background-color: #fff; color: #fff; width: 100%; border-collapse: separate; text-align: center;">
        <br>
        <br>
        <div style="width: 590px; background-image: url('https://i.imgur.com/B0nqSlt.png'); background-size: cover; background-repeat: no-repeat; margin: 0px auto;">
            <div>
                <img style="width: 25%; margin-top: 15%;" src="https://i.imgur.com/3UJBeFg.png">
                    <h2 style="position: absolute;
                        top: 200px;
                        left: 0;
                        width: 100%;
                        margin: 0 auto;
                        font-size: 16px;
                        font-weight: normal;
                        font-family: 'Roboto', sans-serif;">Verifique su correo electrónico</h2>
                    <h2 style="position: absolute;
                        top: 200px;
                        left: 0;
                        width: 100%;
                        margin: 0 auto;
                        font-size: 42px;
                        font-wight: bold;
                        font-family: 'Roboto', sans-serif;">¡Bienvenido!</h2>
                    <br>
                    <hr style="width: 75%; color: #fff;">
                    <br>
                    <h2 style="position: absolute;
                        top: 200px;
                        left: 0;
                        font-weight: normal;
                        width: 100%;
                        margin: 0 auto;
                        font-size: 12px;
                        font-family: 'Roboto', sans-serif;">Se ha asociado tu correo electrónico a una cuenta de<br>
                        MedixLab, para validar tu usuario da clic al enlace siguiente:</h2>
                    <br>
                    <br>
                    ${kcSanitize(msg("emailVerificationBodyHtml",link, linkExpiration, realmName, linkExpirationFormatter(linkExpiration)))?no_esc}
                    <br>
                    <br>
                    <h2 style="position: absolute;
                        top: 200px;
                        left: 0;
                        width: 100%;
                        margin: 0 auto;
                        font-size: 12px;
                        font-weight: normal;
                        font-family: 'Roboto', sans-serif;
                        -webkit-box-shadow: 5px 4px 9px -5px rgba(0,0,0,0.74); 
                        box-shadow: 5px 4px 9px -5px rgba(0,0,0,0.74);">Este enlace expirará en 15 minutos.<br>
                        Si NO has creado esta cuenta, ignora este mensaje</h2>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
            </div>
        </div>
    </div>
</body>
</html>
