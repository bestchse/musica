import React, { Component } from 'react'
import { Container, Row, Col, Button, Form, Card } from "react-bootstrap";


export class TextYoutubeApi extends Component {

    constructor() {
        super();
        this.state = {
            data: [
                {
                    "kind": "youtube#liveChatMessage",
                    "etag": "Llzi-qLJ_uQMloIKoVX2xTcWcBc",
                    "id": "LCC.CikqJwoYVUNrRGIxdGxnaFVTZzNsRVZWSmRmbGtBEgtMWDdVWWtoWHVISRI5ChpDTEcxb2U3MzVmMENGVkhDd2dRZGtxMEVsZxIbQ05teXVvWDM1ZjBDRmR1a1l3WWRQZU1BRmcw",
                    "snippet": {
                        "type": "textMessageEvent",
                        "liveChatId": "KicKGFVDa0RiMXRsZ2hVU2czbEVWVkpkZmxrQRILTFg3VVlraFh1SEk",
                        "authorChannelId": "UCkDb1tlghUSg3lEVVJdflkA",
                        "publishedAt": "2023-03-18T16:50:29.381562+00:00",
                        "hasDisplayContent": true,
                        "displayMessage": "test",
                        "textMessageDetails": {
                            "messageText": "test"
                        }
                    },
                    "authorDetails": {
                        "channelId": "UCkDb1tlghUSg3lEVVJdflkA",
                        "channelUrl": "http://www.youtube.com/channel/UCkDb1tlghUSg3lEVVJdflkA",
                        "displayName": "IIAprIl",
                        "profileImageUrl": "https://yt3.ggpht.com/9b0qQ3HuI-uJf276jJ48vLS99vM41Ncr9uwdjzzVAwmW8y3JUYt9bBBSymRMY9PNt6lhONu-zg=s88-c-k-c0x00ffffff-no-rj",
                        "isVerified": false,
                        "isChatOwner": true,
                        "isChatSponsor": false,
                        "isChatModerator": false
                    }
                },
                {
                    "kind": "youtube#liveChatMessage",
                    "etag": "ZeeiTFgXDmVe9dXh-kjjGDmiJeI",
                    "id": "LCC.CikqJwoYVUNrRGIxdGxnaFVTZzNsRVZWSmRmbGtBEgtMWDdVWWtoWHVISRI5ChpDS0xHLXVMNzVmMENGWVFYclFZZGRCWUJuURIbQ05uSmdaNzY1ZjBDRldMV2N3RWRYYllLVUEw",
                    "snippet": {
                        "type": "textMessageEvent",
                        "liveChatId": "KicKGFVDa0RiMXRsZ2hVU2czbEVWVkpkZmxrQRILTFg3VVlraFh1SEk",
                        "authorChannelId": "UCkDb1tlghUSg3lEVVJdflkA",
                        "publishedAt": "2023-03-18T17:07:59.420107+00:00",
                        "hasDisplayContent": true,
                        "displayMessage": "nandakore",
                        "textMessageDetails": {
                            "messageText": "nandakore"
                        }
                    },
                    "authorDetails": {
                        "channelId": "UCkDb1tlghUSg3lEVVJdflkA",
                        "channelUrl": "http://www.youtube.com/channel/UCkDb1tlghUSg3lEVVJdflkA",
                        "displayName": "IIAprIl",
                        "profileImageUrl": "https://yt3.ggpht.com/9b0qQ3HuI-uJf276jJ48vLS99vM41Ncr9uwdjzzVAwmW8y3JUYt9bBBSymRMY9PNt6lhONu-zg=s88-c-k-c0x00ffffff-no-rj",
                        "isVerified": false,
                        "isChatOwner": true,
                        "isChatSponsor": false,
                        "isChatModerator": false
                    }
                },
                {
                    "kind": "youtube#liveChatMessage",
                    "etag": "OZ-oBlYye2HZnJugXJlIicq6jgc",
                    "id": "LCC.CikqJwoYVUNrRGIxdGxnaFVTZzNsRVZWSmRmbGtBEgtMWDdVWWtoWHVISRI5ChpDSTZrZ3V2NzVmMENGWG9kclFZZERBd0xuURIbQ05uSmdaNzY1ZjBDRldMV2N3RWRYYllLVUEx",
                    "snippet": {
                        "type": "textMessageEvent",
                        "liveChatId": "KicKGFVDa0RiMXRsZ2hVU2czbEVWVkpkZmxrQRILTFg3VVlraFh1SEk",
                        "authorChannelId": "UCkDb1tlghUSg3lEVVJdflkA",
                        "publishedAt": "2023-03-18T17:08:16.320401+00:00",
                        "hasDisplayContent": true,
                        "displayMessage": "hah",
                        "textMessageDetails": {
                            "messageText": "hah"
                        }
                    },
                    "authorDetails": {
                        "channelId": "UCkDb1tlghUSg3lEVVJdflkA",
                        "channelUrl": "http://www.youtube.com/channel/UCkDb1tlghUSg3lEVVJdflkA",
                        "displayName": "IIAprIl",
                        "profileImageUrl": "https://yt3.ggpht.com/9b0qQ3HuI-uJf276jJ48vLS99vM41Ncr9uwdjzzVAwmW8y3JUYt9bBBSymRMY9PNt6lhONu-zg=s88-c-k-c0x00ffffff-no-rj",
                        "isVerified": false,
                        "isChatOwner": true,
                        "isChatSponsor": false,
                        "isChatModerator": false
                    }
                },
                {
                    "kind": "youtube#liveChatMessage",
                    "etag": "3mf3Vss4mHN6TO5fLmGBmBWuMsc",
                    "id": "LCC.CikqJwoYVUNrRGIxdGxnaFVTZzNsRVZWSmRmbGtBEgtMWDdVWWtoWHVISRI5ChpDTlRGcktqOTVmMENGU2NMclFZZDNuQUZHdxIbQ05uSmdaNzY1ZjBDRldMV2N3RWRYYllLVUEy",
                    "snippet": {
                        "type": "textMessageEvent",
                        "liveChatId": "KicKGFVDa0RiMXRsZ2hVU2czbEVWVkpkZmxrQRILTFg3VVlraFh1SEk",
                        "authorChannelId": "UCkDb1tlghUSg3lEVVJdflkA",
                        "publishedAt": "2023-03-18T17:14:53.378502+00:00",
                        "hasDisplayContent": true,
                        "displayMessage": "asjdhadkjasd",
                        "textMessageDetails": {
                            "messageText": "asjdhadkjasd"
                        }
                    },
                    "authorDetails": {
                        "channelId": "UCkDb1tlghUSg3lEVVJdflkA",
                        "channelUrl": "http://www.youtube.com/channel/UCkDb1tlghUSg3lEVVJdflkA",
                        "displayName": "IIAprIl",
                        "profileImageUrl": "https://yt3.ggpht.com/9b0qQ3HuI-uJf276jJ48vLS99vM41Ncr9uwdjzzVAwmW8y3JUYt9bBBSymRMY9PNt6lhONu-zg=s88-c-k-c0x00ffffff-no-rj",
                        "isVerified": false,
                        "isChatOwner": true,
                        "isChatSponsor": false,
                        "isChatModerator": false
                    }
                },
                {
                    "kind": "youtube#liveChatMessage",
                    "etag": "oPoPvK7Z_18Gw40ZI4TRYMeWHkc",
                    "id": "LCC.CikqJwoYVUNrRGIxdGxnaFVTZzNsRVZWSmRmbGtBEgtMWDdVWWtoWHVISRI5ChpDT08yN3YzOTVmMENGWjRqclFZZGQ1OElLURIbQ0xYSi1mcjk1ZjBDRlMwTXR3QWR1cmdER0Ew",
                    "snippet": {
                        "type": "textMessageEvent",
                        "liveChatId": "KicKGFVDa0RiMXRsZ2hVU2czbEVWVkpkZmxrQRILTFg3VVlraFh1SEk",
                        "authorChannelId": "UCbGSop3RgOp7MeojJs8sgkQ",
                        "publishedAt": "2023-03-18T17:17:52.717685+00:00",
                        "hasDisplayContent": true,
                        "displayMessage": "hi",
                        "textMessageDetails": {
                            "messageText": "hi"
                        }
                    },
                    "authorDetails": {
                        "channelId": "UCbGSop3RgOp7MeojJs8sgkQ",
                        "channelUrl": "http://www.youtube.com/channel/UCbGSop3RgOp7MeojJs8sgkQ",
                        "displayName": "NaNaNa_SaMa",
                        "profileImageUrl": "https://yt3.ggpht.com/fNXzlBBqFmU8juOq3j09zt-2SMp7ge8lPX24L4747wEp4wSroMBgKzSqLohNmmiAbPyyD6Ho25Y=s88-c-k-c0x00ffffff-no-rj",
                        "isVerified": false,
                        "isChatOwner": false,
                        "isChatSponsor": false,
                        "isChatModerator": false
                    }
                },
                {
                    "kind": "youtube#liveChatMessage",
                    "etag": "V90Ez41TolDdtb4So1ORhCY2F-8",
                    "id": "LCC.CikqJwoYVUNrRGIxdGxnaFVTZzNsRVZWSmRmbGtBEgtMWDdVWWtoWHVISRI5ChpDTHI1M2FpRTV2MENGVUlfclFZZGRtTUE4QRIbQ0xYSi1mcjk1ZjBDRlMwTXR3QWR1cmdER0Ex",
                    "snippet": {
                        "type": "textMessageEvent",
                        "liveChatId": "KicKGFVDa0RiMXRsZ2hVU2czbEVWVkpkZmxrQRILTFg3VVlraFh1SEk",
                        "authorChannelId": "UCbGSop3RgOp7MeojJs8sgkQ",
                        "publishedAt": "2023-03-18T17:46:13.235867+00:00",
                        "hasDisplayContent": true,
                        "displayMessage": "yo",
                        "textMessageDetails": {
                            "messageText": "yo"
                        }
                    },
                    "authorDetails": {
                        "channelId": "UCbGSop3RgOp7MeojJs8sgkQ",
                        "channelUrl": "http://www.youtube.com/channel/UCbGSop3RgOp7MeojJs8sgkQ",
                        "displayName": "NaNaNa_SaMa",
                        "profileImageUrl": "https://yt3.ggpht.com/fNXzlBBqFmU8juOq3j09zt-2SMp7ge8lPX24L4747wEp4wSroMBgKzSqLohNmmiAbPyyD6Ho25Y=s88-c-k-c0x00ffffff-no-rj",
                        "isVerified": false,
                        "isChatOwner": false,
                        "isChatSponsor": false,
                        "isChatModerator": false
                    }
                },
                {
                    "kind": "youtube#liveChatMessage",
                    "etag": "p3QD1gDj7SNxMOPOADWtyp572QI",
                    "id": "LCC.CikqJwoYVUNrRGIxdGxnaFVTZzNsRVZWSmRmbGtBEgtMWDdVWWtoWHVISRI5ChpDSUNkazdHRTV2MENGZWpEd2dRZDhMTUtodxIbQ0xYSi1mcjk1ZjBDRlMwTXR3QWR1cmdER0Ey",
                    "snippet": {
                        "type": "textMessageEvent",
                        "liveChatId": "KicKGFVDa0RiMXRsZ2hVU2czbEVWVkpkZmxrQRILTFg3VVlraFh1SEk",
                        "authorChannelId": "UCbGSop3RgOp7MeojJs8sgkQ",
                        "publishedAt": "2023-03-18T17:46:30.883025+00:00",
                        "hasDisplayContent": true,
                        "displayMessage": "และนี้คือเสียงจากเด็กวัด",
                        "textMessageDetails": {
                            "messageText": "และนี้คือเสียงจากเด็กวัด"
                        }
                    },
                    "authorDetails": {
                        "channelId": "UCbGSop3RgOp7MeojJs8sgkQ",
                        "channelUrl": "http://www.youtube.com/channel/UCbGSop3RgOp7MeojJs8sgkQ",
                        "displayName": "NaNaNa_SaMa",
                        "profileImageUrl": "https://yt3.ggpht.com/fNXzlBBqFmU8juOq3j09zt-2SMp7ge8lPX24L4747wEp4wSroMBgKzSqLohNmmiAbPyyD6Ho25Y=s88-c-k-c0x00ffffff-no-rj",
                        "isVerified": false,
                        "isChatOwner": false,
                        "isChatSponsor": false,
                        "isChatModerator": false
                    }
                }
            ]
        }
    }

    render() {
        console.log(this.state.data)
        return (
            <div>
                {
                    this.state.data.map((data, idx) => (
                        <div key={idx} style={{ marginTop: 10, backgroundColor: 'white' }}>
                            <div >
                                <img
                                    style={{ width: '20px' }}
                                    src={data.authorDetails.profileImageUrl}
                                />
                                <Row style={{ flexDirection: 'row', borderColor: 'red', borderWidth: 2 }}>
                                    <Col md="2">{data.authorDetails.displayName}</Col>
                                    <Col md="2">{data.snippet.displayMessage}</Col>
                                </Row>

                            </div>



                        </div>
                    ))
                }

            </div>
        )
    }
}

export default TextYoutubeApi