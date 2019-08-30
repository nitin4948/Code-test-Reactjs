## Coding Test

MCDS area has a web service application. It throws log files but sometimes when we are looking for any error messages,
 look into the logs is very verbose.
For example, Next is the request into the log file:

Request



```xml
*

*

SOAP REQUEST RECEIVED

TIME: 13/Nov/2018:09:00:00

SOAP URI: /AbfDocumentManager

SOAPAction: http://tempuri.org/action/AbfDocumentManager.getRecipientTypesXml

GUID: e18fba22-e0f8-4f03-ae7a-9ab7524b0482



REQUEST MESSAGE:



<?xml version='1.0' encoding='UTF-8'?>

<soap:Envelope xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' xmlns:xsd='http://www.w3.org/2001/XMLSchema' xmlns:soap='http://schemas.xmlsoap.org/soap/envelope/' xmlns:soapenc='http://schemas.xmlsoap.org/soap/encoding/' soap:encodingStyle='http://schemas.xmlsoap.org/soap/encoding/' xmlns:ns5='http://tempuri.org/type'><soap:Header><SOAPSDK1:ABFJob xmlns:SOAPSDK1='ClientLayout=FAKE028http://abfhealth.com/JobControlHeader'><ShouldRunAtResource>ClientLayout=FAKE028</ShouldRunAtResource></SOAPSDK1:ABFJob></soap:Header><soap:Body><n:getRecipientTypesXml xmlns:n='http://tempuri.org/message/'><pobjSecContext href='#id0'></pobjSecContext></n:getRecipientTypesXml><id0 id='id0' soapenc:root='0' xsi:type='ns5:AbfSecurityContext'><description xsi:type='xsd:string'>UpdateDataXmlServlet</description><ticket xsi:type='xsd:string'>H49U5Q043Y35345OHJ37534594U3593UJFGDFHHSHK</ticket><dataSourceDefinition xsi:type='xsd:string'>/FAKE/028/*</dataSourceDefinition></id0></soap:Body></soap:Envelope>

*

*
```
And the response:
```xml
*

*

SOAP RESPONSE

TIME: 13/Nov/2018:09:00:01

SOAP URI: /AbfDocumentManager

SOAPAction: http://tempuri.org/action/AbfDocumentManager.getRecipientTypesXml

GUID: e18fba22-e0f8-4f03-ae7a-9ab7524b0482

HRESULT: 0x00000000

HTTP Status: 200



REQUEST MESSAGE:



<?xml version='1.0' encoding='UTF-8'?>

<soap:Envelope xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' xmlns:xsd='http://www.w3.org/2001/XMLSchema' xmlns:soap='http://schemas.xmlsoap.org/soap/envelope/' xmlns:soapenc='http://schemas.xmlsoap.org/soap/encoding/' soap:encodingStyle='http://schemas.xmlsoap.org/soap/encoding/' xmlns:ns5='http://tempuri.org/type'><soap:Header><SOAPSDK1:ABFJob xmlns:SOAPSDK1='ClientLayout=FAKE028http://abfhealth.com/JobControlHeader'><ShouldRunAtResource>ClientLayout=FAKE028</ShouldRunAtResource></SOAPSDK1:ABFJob></soap:Header><soap:Body><n:getRecipientTypesXml xmlns:n='http://tempuri.org/message/'><pobjSecContext href='#id0'></pobjSecContext></n:getRecipientTypesXml><id0 id='id0' soapenc:root='0' xsi:type='ns5:AbfSecurityContext'><description xsi:type='xsd:string'>UpdateDataXmlServlet</description><ticket xsi:type='xsd:string'>H49U5Q043Y35345OHJ37534594U3593UJFGDFHHSHK</ticket><dataSourceDefinition xsi:type='xsd:string'>/FAKE/028/*</dataSourceDefinition></id0></soap:Body></soap:Envelope>



RESPONSE MESSAGE:



<?xml version="1.0" encoding="UTF-8" standalone="no"?><SOAP-ENV:Envelope SOAP-ENV:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/" xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/"><SOAP-ENV:Body SOAP-ENV:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/"><SOAP-ENV:Fault><faultcode>SOAP-ENV:Surrogate</faultcode><faultstring>An error occured inside the Surrogate.  Could not call Load the WSDL File into the MSSOAP.WSDLReader Object Error Description: Unknown</faultstring><detail><HRESULT>0x80040154</HRESULT></detail></SOAP-ENV:Fault></SOAP-ENV:Body></SOAP-ENV:Envelope>

*

*

```
We want to simplify it and convert the previous output something like this (request and response together):
```xml
action: http://tempuri.org/action/AbfDocumentManager.getRecipientTypesXml; hresult: 0x00000000; httpStatus: 200
request  time: 13/Nov/2018:09:00:00; request: <?xml version='1.0' encoding='UTF-8'?><soap:Envelope xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' xmlns:xsd='http://www.w3.org/2001/XMLSchema' xmlns:soap='http://schemas.xmlsoap.org/soap/envelope/' xmlns:soapenc='http://schemas.xmlsoap.org/soap/encoding/' soap:encodingStyle='http://schemas.xmlsoap.org/soap/encoding/' xmlns:ns5='http://tempuri.org/type'><soap:Header><SOAPSDK1:ABFJob xmlns:SOAPSDK1='ClientLayout=FAKE028http://abfhealth.com/JobControlHeader'><ShouldRunAtResource>ClientLayout=FAKE028</ShouldRunAtResource></SOAPSDK1:ABFJob></soap:Header><soap:Body><n:getRecipientTypesXml xmlns:n='http://tempuri.org/message/'><pobjSecContext href='#id0'></pobjSecContext></n:getRecipientTypesXml><id0 id='id0' soapenc:root='0' xsi:type='ns5:AbfSecurityContext'><description xsi:type='xsd:string'>UpdateDataXmlServlet</description><ticket xsi:type='xsd:string'>H49U5Q043Y35345OHJ37534594U3593UJFGDFHHSHK</ticket><dataSourceDefinition xsi:type='xsd:string'>/FAKE/028/*</dataSourceDefinition></id0></soap:Body></soap:Envelope>
response time: 13/Nov/2018:09:00:01; response: <?xml version="1.0" encoding="UTF-8" standalone="no"?><SOAP-ENV:Envelope SOAP-ENV:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/" xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/"><SOAP-ENV:Body SOAP-ENV:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/"><SOAP-ENV:Fault><faultcode>SOAP-ENV:Surrogate</faultcode><faultstring>An error occured inside the Surrogate.  Could not call Load the WSDL File into the MSSOAP.WSDLReader Object Error Description: Unknown</faultstring><detail><HRESULT>0x80040154</HRESULT></detail></SOAP-ENV:Fault></SOAP-ENV:Body></SOAP-ENV:Envelope>
guid: e18fba22-e0f8-4f03-ae7a-9ab7524b0482; uri: /AbfDocumentManager
```
1.	Create a JavaScript script (JS6) to do that task (you can put any name, example: index.js). 
2.	Use the file soaptrace.txt as the input and result.txt as the output
3.	Consider you are going to process big files (more than 1,000,000 lines).
4.  Consider that a request doesn't always come together with a response, the only way that you know the respective response is through the guid. For example, in the log could be request 1, request 2, response 2, response 1
5.	Modify the program and filter by any substring in the response.

You can use any editor. We are going to review the code only.

Which other improvements could be implemented? Please share your ideas.
