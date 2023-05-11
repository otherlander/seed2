window.Localize = function (str) {return str};

window["__TEMPLATE__"] = {
	name: "basicResource",
	version: "2.0.0",
	empowerVersion: "1.0.0"
};

window["__CONTENT__"] = [
    {
        "component": "section",
        "children": [
            {
                "component": "heroImage",
                "data": {
                    "urlDT": "images/1.png",
                    "urlM": "images/0.png",
                    "aspectRatio": "2:1"
                }
            },
            {
                "component": "heroCopy",
                "data": {
                    "title": Localize("iPhone is even better with other Apple devices"),
                    "copy": [
                        Localize("Employees need to be productive whether they’re at their desk, on the move, or sharing content with customers. Apple designs its devices to work together seamlessly, so employees and organizations can use iPhone with any Apple device to get more done."),
                        Localize("Apple devices integrate with each other when they’re all signed into the same iCloud account. This gives employees powerful Continuity features that make everything just work, so employees can start a project on one device and finish on another."),
                        Localize("Demonstrate how Apple devices work together to help your customers see how Apple gives them a unique advantage compared to other platforms.")
                    ]
                }
            },
            {
                "component": "accordion",
                "data": {
                    "size": "base",
                    "numbered": false,
                    "expanded": false
                },
                "children": [
                    {
                        "component": "accordionitem",
                        "data": {
                            "title": Localize("Mac with iPhone")
                        },
                        "children": [
                            {
                                "component": "sectionImage",
                                "data": {
                                    "url": "images/2.png",
                                    "aspectRatio": "4:1"
                                }
                            },
                            {
                                "component": "paragraph",
                                "data": {
                                    "copy": [
                                        Localize("iPhone is even better when employees also use Mac."),
                                        Localize("<strong>Continuity Camera</strong>—Use iPhone as a Mac webcam or microphone, and take advantage of the powerful iPhone camera and additional video effects. Or scan a document with iPhone and have it appear instantly on Mac."),
                                        Localize("<strong>AirPlay to Mac</strong>—Use a Mac as an AirPlay&nbsp;speaker and enjoy high-fidelity, room-filling sound from iPhone."),
                                        Localize("<strong>Continuity Sketch</strong>—Sketch a diagram on iPhone and easily insert it into a document on a Mac."),
                                        Localize("<strong>Continuity Markup</strong>—Use iPhone to add sketches, shapes, and other markup to a document on a Mac and see the changes instantly.")
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "component": "accordionitem",
                        "data": {
                            "title": Localize("iPad with iPhone")
                        },
                        "children": [
                            {
                                "component": "sectionImage",
                                "data": {
                                    "url": "images/3.png",
                                    "aspectRatio": "4:1"
                                }
                            },
                            {
                                "component": "paragraph",
                                "data": {
                                    "copy": [
                                        Localize("iPhone is even better when employees use it with iPad."),
                                        Localize("<strong>Handoff</strong>—Start a task on one device, then switch to another nearby device to continue. For example, an employee could start writing an email in Mail on their iPhone and finish it on their iPad. Or they could start researching on a web page on their iPad and then continue on their iPhone."),
                                        Localize("Apps that work with Handoff include Mail, Maps, Safari, Reminders, Calendar, Contacts, Pages, Numbers, Keynote, and many third-party apps."),
                                        Localize("<strong>Universal Clipboard</strong>—Send text, images, photos, and videos from a document on one device and paste them into a document on another. For example, employees can copy text from a web page in Safari on their iPad and paste it into a Pages document on their iPhone.")
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "component": "accordionitem",
                        "data": {
                            "title": Localize("iPhone with another iPhone")
                        },
                        "children": [
                            {
                                "component": "sectionImage",
                                "data": {
                                    "url": "images/4.png",
                                    "aspectRatio": "4:1"
                                }
                            },
                            {
                                "component": "paragraph",
                                "data": {
                                    "copy": [
                                        Localize("iPhone is even better when an employee shares content or access with another iPhone."),
                                        Localize("<strong>AirDrop</strong>—Quickly and wirelessly share documents, photos, videos, contacts, and anything else with nearby employees using iPhone."),
                                        Localize("<strong>Shared passwords</strong>—Easily share Wi-Fi passwords with nearby employees using iPhone."),
                                        Localize("<strong>Messages</strong>—Communicate more effectively using Tapback for quick reactions to a message by editing or unending a recent message and by marking conversations as unread to read later."),
                                        Localize("<strong>Apple Cash</strong>—Send money to colleagues quickly and easily.")
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "component": "accordionitem",
                        "data": {
                            "title": Localize("Apple Watch with iPhone")
                        },
                        "children": [
                            {
                                "component": "sectionImage",
                                "data": {
                                    "url": "images/5.png",
                                    "aspectRatio": "4:1"
                                }
                            },
                            {
                                "component": "paragraph",
                                "data": {
                                    "copy": [
                                        Localize("iPhone is even better for employees who have Apple Watch."),
                                        Localize("<strong>Unlock with Apple Watch</strong>—Unlock iPhone with Apple Watch even while wearing a face covering or sunglasses."),
                                        Localize("<strong>Messages</strong>—Send and receive messages from an Apple Watch that’s connected to iPhone."),
                                        Localize("<strong>Phone calls</strong>—Make and answer calls on iPhone using Apple Watch."),
                                        Localize("<strong>Find My app</strong>—Quickly locate a lost iPhone using Apple Watch."),
                                        Localize("<strong>Camera Remote app</strong>—Use Apple&nbsp;Watch to remotely take a photo with iPhone.")
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "component": "accordionitem",
                        "data": {
                            "title": Localize("Apple TV with iPhone")
                        },
                        "children": [
                            {
                                "component": "sectionImage",
                                "data": {
                                    "url": "images/6.png",
                                    "aspectRatio": "4:1"
                                }
                            },
                            {
                                "component": "paragraph",
                                "data": {
                                    "copy": [
                                        Localize("iPhone is even better with Apple TV. Your customers can use Apple TV in a lobby, their conference rooms, or as digital signage."),
                                        Localize("<strong>AirPlay</strong>—Effortlessly stream music, videos, or mirror iPhone to Apple TV—no dongles or cables required. It’s easy for employees to set up for a meeting in a conference room—they can just walk in, connect wirelessly, and start presenting."),
                                        Localize("<strong>Control Center remote</strong>—Use iPhone as a remote control for Apple TV in conference rooms, lobbies, or for digital signs and menus."),
                                        Localize("<strong>Face ID and Touch ID</strong>—Use iPhone to authenticate apps and purchases on Apple TV.")
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "component": "accordionitem",
                        "data": {
                            "title": Localize("Discover more")
                        },
                        "children": [
                            {
                                "component": "sectionImage",
                                "data": {
                                    "url": "images/7.png",
                                    "aspectRatio": "4:1"
                                }
                            },
                            {
                                "component": "paragraph",
                                "data": {
                                    "copy": [
                                        Localize("See the following links to more information in SEED:")
                                    ]
                                }
                            },
                            {
                                "component": "links",
                                "data": {
                                    "links": [
                                        {
                                            "type": "chevronright",
                                            "text": Localize("Continuity"),
                                            "url": "seed://content-assets/[T024245A]"
                                        },
                                        {
                                            "type": "chevronright",
                                            "text": Localize("Everything is easier with more than one Apple device"),
                                            "url": "seed://content-assets/[T025359A]"
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "component": "divider"
            },
            {
                "component": "paragraph",
                "data": {
                    "copy": [
                        Localize("<a href=\"seed://collections/R005389\" target=\"_blank\">Apple advantages</a> | <a href=\"seed://collections/R005390\" target=\"_blank\">Apple at Work</a> | <a href=\"seed://collections/R005391\" target=\"_blank\">iPhone at work</a> | <a href=\"http://R005392\" target=\"_blank\">iPad at work</a> | <a href=\"seed://content-assets/[R005393]\" target=\"_blank\">Mac at work</a>")
                    ]
                }
            }
        ]
    },
    {
        "component": "qsp"
    }
];