# Z-CON (aka. zdr control server)

## .env
```
USER_NAME=zdr
USER_PASSWORD=zdr
CONFIG_FILE_PATH=<path to>/config.json
```

# Sources
For ZDR to function properly, you need to create a new Zello account that you will register as the operator of the stream to which you will connect from your private account. It is not possible to use your account because you cannot be logged in on two devices at the same time.

Zello Use: Fill in the user name of the zello stream operator.
Zello Password: Fill in the password of the operator's Zello account.
Zello Channel: Enter the exact name of the channel you set up in your operator account to which this stream will be sent.

Now you will need to login to the Zello developer site at: https://developers.zello.com/keys and generate the necessary api keys.
Issuer Key: You can find this key once generated on the above page.
Zello Private Key: You can also find this key after generating it on the above page, you have to enter it with -----BEGIN PRIVATE KEY----- and -----END PRIVATE KEY-----

RTL_FM Prompt: In this last step, you can adjust the frequency on which ZDR will listen. I recommend studying rtl_sdr functions on the author's website. The system is preset, so if you don't know how to do it, you only need to change the frequency in KHz
