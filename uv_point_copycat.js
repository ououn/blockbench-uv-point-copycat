(function() {
    var storedspls = [0,0,-1];
    var button_copycat;
    var button_pastecat;
    var button_supercat;
    var button_snapcat;
    var button_intercat;

    let icon_dacat = 'fas.fa-cat';
    let icon_button_default = 'data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAzVJREFUeF7tm71uFDEQx39T0PDVgEB00NHRINGARGreAZGCN4CaRKKDN6Ag8A7URIIGQUMFXSJRICFSID4kCNLAnM4b72b37D17SRavqyvs8fjnv2fGu3tCj6aqt4DHwAawLiLbPYYP1lVVzwP3APNvTUTWYyeT2I6qeh147vW3xa+KyGasjSH6tfhl05hftknBFgVgTnirw1r0ZEFvenboWLyzciFGobEAbPEms672zyEEFm9+mkJXQhCCAFTVztZaxOZEEY+wE+wSUKQ/PhgPFgLoMVE08eDqAh16+mTWFm5MCEBI+k13g8QzAIhVpJtq4VHoBNBD+s01DXYUIs597xi1CEDf3Y8inqIAVc3uUysAr+BZ1t/sWSFh990aWn3qAmDVnlVVy7ZNEVlZdnDbOFW1IsyKsWVbq0/7ACwRZbscyhYLhvSpDUDfKNsFYENEVpfdLn+cqqYqsvMYtAFIlZrve00Fqnra8jJwDjgFnJh3/grsAB+BLRH57IxkOPu+P/uOQQ1ARqn5k94HrgCXgDORivgEvAVeAbeBs5HjYrrVNqUJoHnjizHY1WcXOJJiwBv7G/gJHMtgz+4H1Q22CSDX+c/g52AmatVqE0DO8z/YChIN1+JAE4AmGh/F8L9PjKp1Vz8GCoCHFUgVCH0A7nnfYXU6p19VWewDKCEAOohVkeYDKCEAOgBVIPQBFBEA5wS2RcQqUmYACguATgWzQDgBmCugpAxQuxk6BZSUARyAWUnsAOS6b+fM1UPbmqVCB6CkFFhLhQ5ASSnQAZilwpIBGIgLUmgNsFcLZH7mNnTgym1/xRRQYg2wVwskvAPMvRsHYW/VFFBiEbR3Lc740uEgdjB1zg1TwGvgcqqlkY5/YwDeARdHuoBUt98bgC/AyVRLIx3/wQB8B46OdAGpbv8wAPZi8niqpZGO/1b6EZgp4FfGl5hjE8KuASjxKlxt1ARgUsB0BKYYMAXBseWunP5OWWDKAlMWmLLAlAVyRtWx2ZqygKral9n25XaJbccU8AS4WeLqgacG4CrwolAA19zr8QfAncIgPBSRu/53gqYE+3PCjf84Jti/Up4Bj0TkpW34H5qHiIdrGObBAAAAAElFTkSuQmCC';
    let icon_button_snapcat = 'data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAA+9JREFUeF7tmjuSFDEMQOWMkCMwGUcggzkJzA24AbsnYTgJsxGEZJAxNyChioQqgbx2l7rXbuvjHnrpmSqoDdyW9CzJsuwAih8ivgGA9wBwBIDbEMJZ8fliQxHxGQC8AwDS7yaEcCsVFqQDEfEVAHxk48n4QwjhJJ1jiXEFvUgM6UWL1PyJACTC3yuziYU1tVEOqBifZ9lJPFQKgIwnN6v9Lg6hYTzpSR66b0FoAkBEiq0bweKIiAvmaQ5peCT/vpkPZgEoBImJN61rDFDqRLPNLkwLQMv1p+o2iXcAIPXILGo2FKoAFK4/tWmxUBDEvTpHzQHQrr6IuMcDELG7TkUArOCx6tt9V3CsfrahqFMNAFV7VFVZf6cQwt76cek7RKQijIox66+o0wMAhixbU6hbLlhSpxIAbZatATiGEA7W5eLfIaLXI6thUALgdTWue9ELUjzzypK2qniwmlZuHWKf6/MgDEYAOroaF0pe8DqV0nPlNP8mA/kCAG97eBGbY7QoUwDTE19n2auYjs4Hwwl2CqBX/K/C0ooSo2p1CqBn/K8VwigPTAHgWrXuqdffjtFg9/DHQgmwp9495xoSIQeQ+309Ba11rqEs5gC2kADzggxFGgewhQSYAQyJkAPYRAJMBM4hhF2sPOm/jSXA7AUxEV4BJA/Y0g4wOhlmD9jSDpABxJI4A+h13l7rvl/SK26FGcCWtsDRVpgBbGkLzADiVtgDAN3CfqAzdurevEwNVWnzQxo2JOeObn2ZHOpfeBqlu+CoAWavxx09/BKQURODD3Bc4NA0EYClCyR6G9CpmVk1PoNwQNgTAEsNILoDTN5FCdYaDiI5qZax3BodCIC2BhjqaEnwOr1AfLdgsIPUNwEQrwo7Z1i8QCXH6AVH8gBtESReFRajNvcUvvNhcrS2RACfAOCFxJ3j8ZH106TfGCDT1M3kN5VvCIPPBOArADwXGqOKf8fKWEFrE/o3AvADAJ4KAZhufQ07jRW0dks/XwqAdqexeoAWwE8C8AsAngg9wLoyagCtx00lfQ2eFgFoD0KWXcBy2rxEEoRLAdBCvi9Slt8Gf1sAqAoUx2FLlXCtciwA7k9Rwpfixhpg1LmV5CdDDRCntQIQeYF1VZjBomc2HjlWAM0YTUpRaeppWJCcJmzPCzIPgCoEz4pU3L0KwWO8JwS4nvTchP7dpXN/bolJQlczpiSHvMvaa3DlAI3iqx7rDYFVGydR7grAUApLwD6aMVcPuHqA/jT4aNxboug1BDpfYUmgr2lMbIlpW8lrMsCryynfDRIEV0np1eQffb/nT2SopbwlCLHjxN8J0sGCmpcE4X8GMbxnIK/7A5F7Rq1M9ynrAAAAAElFTkSuQmCC';
    let icon_button_snapcat_facetime = 'data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAABH1JREFUeF7lmzFyFTEMhuWOkgMwQ17HESiTk5DMcI8kJ8njJLwObgAdKdNBQW/ym/Vie21L8tpvls0rMinWtvxZ+i1rvYYUP2vtNRE9ENGRiO6NMY+K5sMetdZeENEtEcG+O2PMvXQwI33QWntJRJ+D5zH5G2PMSdrHiOcydmEY2IVFYn8iABPhH4XexIOx1igfKEze93KQeKgUACYPNyv9zg6BmTzshIdecRBYANZaxNadYHFExAX9sI8wHhm2Z/WgCkAxkJg4OzvmAaVN6K26MBwAzvVTc1niHQBIPdIPVQ2FIgCF66dzGhYKgrhXa1QNgHb1RcTXeIC1trtNWQBBwtNqb/ddYcXq+zlkbSoBQLaHrKr1dzLGXLU2zrWz1iIJQzLW+svatADQoLIlg7ppwUibcgC0KlsCcDTG3LQuV9jOWrvWI4thkAOw1tVC27NeMMVzmFliq3IHqzRz6xD7oT2LMIgAdHS1cFB4wYcpla6l02EbDwQHrY9E9KaHJ019RIuSAkhPfGvG/UVEr9d0ELR9IqJXnfrD+WA+waYAesV/p3kP6SbKVlMAPeN/iPUdOo10IAVgOwyw+S6eK0bzvOd/BgngVmHMQhgC8PW+rRrd0645LQ4BvAQB9BDnJC0E8BIE0AOYhTAEoBVAtiqclKtbXBhjoPxerPA2jvFojDm4zBN/GgVQXP1ZcY6PkpYSwcZ02QlhM4BwK+GWtvEwM68S1/+0iNpiSQRAvQMoAbSk2GIPmwBoNcztBN4D1DuABkDjCo0G4Pr3ANTn7dEAGvrXeoDbCj0AbWOc27mS+kV4tlfqQBT/k0gvagVJ0UQ7B7cVegDaLVAC4DrcvpRKHbn/1BZQim+jG2qGDvJIAA9pSUyxHaYAoFGfOgOAAx1MYw4g8QBsS9HLSSmANLym1YVq9/SAGUDLFiUFEN0fEOpALv4Bs1plbggBALiCB6hzAJdC8iIIo6G0820N4Vi5+IfAjQBwAwDqHEABAKsZvSB5Ho8T3Fz84/X8fwkAVeDIcE4HCvGPMB0B4AgPUCdBCg8AgOhAw4xXiv+/gtVfBB2AL0T0XnLgCJ8RagAApC5d05xS/I8C8BUAvhHRu4EAFm9jKjpQiv9RAL4DwM+WFw4KD1gYX9KBSvyPAvB4LgASHajF/ygAv88FQKIDtfgfBeAJALSVFCcXyhCQ6EAt/ocC4BKTrD4qAbA6wMT/LgBEd3SSfICL/1EACCFwLg+Ibowk5wIu/ncBoKYDXPzvAkBRBwTxvxsAOR249G9ppuox0ufc1fwRZ4GzagDml9OBt0nNoFSg2QWAnA7cJgBK9YldAFgTy7sBULxHzBRodwOgeIN0zTdAjUXRs4sgQqB4kZqpT27LAwQlqlqGuZiM4P3E5gC0xjK8YPEZi6A6vWa8YsGr+Sww9Ygrp+mHk0hkJN8ahG1b2vhJSdvmT7Wt9QBtDXGjz7uSWFNZfKMT0pp1AgCknoAgvcquHWTLz8/3A/yX1y8Jwr87QtMpDJ4AEICwZxC4c4i7Bk68/wA3f8OEbTVHeQAAAABJRU5ErkJggg==';
    let icon_button_copycat = 'data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAABJZJREFUeF7lmzFyFTEMhuWOkgNQkI4j0ME7CWSGe5CchOQkvFRwA+hImS4U9IbfY2+8G9uSLfllmewMCTNZ2/JnSZZkr6OOx3v/kYi+ENEVEV065247mk971Xv/mog+ExHku3DOXUoHc9IXvffviehr9j4mf+6cO0r7mPFeQS4MA7mwSOwjAhAJ/6r0Jh6MlabzhcrkUy9nEg2VAsDkoWa15+QQmMlDTmjogYPAAvDew7YuBIsjIi7oh32F0ci8PesPmgA6BhITZ2fHvNApE3prLgwHgFP9rbgscQMAUo1MQzVNoQqgQ/W3c5pmCgK77/ZRLQC9qy8irtEA7725TEUAWcAzKq/5rqBY/TSHokw1AIj2EFWNPkfn3GG0camd9x5BGIKx0aco0yMAA162JpCZL5gpUwlAr5etAbhyzp2PLlfeznuv1ciqGZQAaFUtl72oBdGe88gSW1VIrLaRm4Ht5/I8MoMVAENVyweFFnyIoXQrnM7bJCBItD4R0SsLTYp9rBZlC2Cb8WnG/U1ELzUdZG3viOiFUX/ID5YMdgvAyv6N5j2lm1W0ugVgaf9TpDfodOUHtgC8wQC77+JfxWiZ9/KfSQ5wrzAWR5gDSPW+vQptKdcSFucAnoMDTBCXIC0HcEoHiG0oVZTT7xTnI1aQxgujWrE4whzAbAeIKu2NtFobI0BopSYBqgG6dc6dhcgTPyY7QFWVKIJAJAkQlpoRHOFMAFBzOJvm4UmsPbyLJnGD37U2hkkR1n0FwHoHaK56XFVkeKUVbYJTlOq25hB2gqQBljuAZPL5CVPJTk8BIciZAFjl281KUKevWSUtW0qK+uBqK0wALLbAxbPWXG+n+jYLKgZ1grBYCYDFFtgshHaufmLYLKsptSAsmBUA69WXAtD6rjM3uDJbLW/aa4w1RrSM0yptAScA0HYiWX1sd7Xj9VY4y/mB0X7TmAcA0MYAbKTX6fy2tcHqEbei3zTGOQBo7UgCQLPL4Gj+ulAttti69QDy6kpj+xs908u7RHCUIkernOAKGqAiKQQw4gBHU92edgHANyJ629Mqe5d1gIodYFCkrmbfAeAHEb3pavbwMgvAaJsdFI9t9hMA7hUHDuwp8M4B3D53AH+mA9i5D7gDAM0WxfqA/wGAdotiL0IoIbOeTPFC0IC9A0AAhMvPqC0iAEL9EOG7STBkAYC9EKW839O6ZFGrK4qVwgIAexVGEW02fUzcYpFnDGuDBYClxNzIBUZTbkmipTJhKwASMxjZbbjCqDaVJysAkoiwN+lit1ilbwkKawUAfXHnAb2rxfWnrQaZA5D4gh4z4CrC2kLOFADciQ5WTeK1udUfdaqP/LSlCaTOiyWs9EfmXBCvcadLZpO39gE5XQ5C+swtP/JGpIdP8apfexkUcE+iAWkQs8/qZl6WmGECW8rwC9dRtbs+tJw58STkKQDkQAAD/3ARAs9yQTqGtel+EBIe6xshxUBVWw8QJx07fTGUxHojtJ3OZUisYzobVKeVQ8M/faPlfkD68no4rXz6uXRL8HBHCE0zj3uKi4rd0ho2QJyBs8bwzcBft1K4deK0DLoAAAAASUVORK5CYII=';
    let icon_button_copycatS = 'data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAABN1JREFUeF7lmz1yUzEQx/+yKSg5AIXTcQS6kJMQz3ABJqZOXOMMR8A5CU4FN4AuLtNBQQkRkfTes96XtNKukpfBDcxEWq1+kla7q30KCT99iVNofAawxRxr9R77hO7FmupPWOAvzgGcQuFCnWFNHUxRG+qPeAOFL177PTSW6gN2VBkl2g3oBSgs1Rm2lPFIACrCN4MCEwajKJTSZnDytYA5jig7lAZgAzP5xahyjwAhOHmn6B5znMQgRAHoS5xD4yK6MkTiUTmEBsEd6fcn2IMgAPJACcQJ8ws2SdQJiCxMGEBs63dVJRBnA6DuyMNAwaMwCoC89bszKngUCOd+mG/ARo0DSF19InHODtAFdBoE4Dk8efoWuBWyV7+ewYhOwwA21ts7zZu97bVTK5ww+ve66o11wt4wZA7q1AOQbGXHNBK0BSV16gNIt7JjCLZqhSVjxZqumr8jnayBY9AHwN9qhzmP7AJ7nmeeZ3mHPZ65wKrrubHPfnsFesegBUBsq7W9sSU03lau9Lg73VbUwNhDYQeNdwBeSuwkK6OzKG0A/YiPM+4vAC84Ary+twCei8jTOPEj2DYAufMvNO8CYjreahuA5PkvoLuQyJYd6ALQQoNMWoxa3eeNql/znyIGcKoYPEN4AHDI901VbTm9PH/AB0BLfMip8ZiSGiftAOBhDaBJpLqMsqr+1Y2fb3wFqr+QC7ExhD6A0gZwC4Vrara28gBNqpsTAI0B2qsVjhx/AEUNIDNLVIEwnqQBIbczKkNYEsAOcyxjWdkq93Bsj8Idrk1MMNZHLCjyXGIHQPoGiKx6taom5zC0okFw2am67mGoboIagNwNQJu8/8I0dE7LQ6j0dACk4u1IJijJ1nSCli4lRn6wFmWvwhoAN91khDaWdcz0Jm7fYEJFIE9gr8IaAP8KjCRCk1a/JhhJqzF3gV0wKQDSq+8QxABww3cjP2tlegeynWQYOgJ6c//CmPqL7SpuAscC4AqhnH1XwDD8vB6GErYD+XLdqMbQsn0AgqeXaPx8JMF3PYZcN4bZYQJCoiUprEcNhQvMcNXLFktc3RIA/OzK6PWX/6bnizQRZO05SsUEW8V1gogA0g1gqsHMa781R+ArNF7n9Y87P5WnOU0ACt/MDvgO4FUpACLXbKZyhG4/DICfjAeH6CvwpAEo7P9vAMDv4gAmbQOAW2MEb6CzU03RGGD6AHJ8dN+6EAohmFEbwZZlNtFmB0wfgHkiX9v6gT9YYIZjaFu+I+IM8QEQCqJYrnCoyELZWiYWCD4AIFoKw/A2gzamumJNNisbggSAeOIiN+SmRJrMIywDgHYMwhXng1mUcKKFHcqbiJhtBJ3icY8wPXyNXrEs21IBlwJgkgvBvEDyasXkcbNB4gCMwFgSMyUvEJPFTYgWAQCEX3TcqsWtdmz1c43qgJ2ROwK18JEUVv3nyLtg1J4IJHFbGOQBuGTjYB6vgXD4zM1/8jaFketQ/UCyHSF4yGUAuIHFPqsrWSxREkDNfweFK8ywi9UKdBes5MSbEyvkBxA2m/MXbP2vKYQwP69A2rq1LthZQONYvCJkREOzA9I9NOp0p9/OpsS4X4dMf5rjGu7qt0F2WPkkKZi3QaN49TwmlmR4EjD8GiELwXlXpi7vIQoVH5PRFhpX9TcD/wDWemuu5OPZkwAAAABJRU5ErkJggg=='
    let icon_button_pastecat = 'data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAA99JREFUeF7tmz2y1DAMx+WOkgNQsB1HoIM9CewM9+C9k7CchEcFN4COLV8HBb1Bxsp4s3Yk2/9kM2wyA/MKf0g/S7KkTRxVPN77t0T0gYiORHTvnDtVTJ9tqPf+ORG9JyKW7845d2/dzFkHeu9fE9GnZDwrf3DOPVjXmGNcRi7ehuXiQ1IfE4BI+EdhNfNmqjSVAwrKyyo7i4VaAbDybGalZ3EIivIsJ1voXoOgAvDes2/dGQ7HRNywjjpEsch0vhoPJgFUbGQmrmqnDKiUiVebPBgNgGb6Y3FV4gAAVouUrSZdoQigwvTHOs3mCga/r45RUwBqT99EvMcCvPdwmbIAkoSnVV74rdBx+qJDVqYSAM72OKtqfR6cc/vWybl53ntOwjgZa32yMl0AaIiyJYFgsWBOmXIAaqNsCcDROXdoPa50nve+1yKLbpAD0GtqqexZK4j+nGaWfFWFwmqcuQF8P5Xnwg3OAABNLd2UreBNTKWn0ul0jgDhQusdET1DWFJc4+xQxgDGFV/Pvr+I6GnPAsncRyJ6AlqP64Ohgh0DQPk/SO9ZljnLVscAkP4/i/SARc/iwBiAB2yw+iX+dowGvYc/ZgqAa4UxBMIUgPT71io0Uq4hLU4B3EIAFIhDkpYCuIUAKACGQJgCQAVAvmPZxKpb5jEOSbL0KhY/PQVQyW1OzrldyDz5P2QATCMswmljKsyZJIOwZpKWrUMgRAMYyE5JEIEPQ6zWAiiJL+oUAYC6AdQ+QKGyk9RUdR10ZSgAUDdAKwA5GVMvv6M1llpASIkFAKre7gXAAlrWQBRt4SoUAKgr0CK8BbbaTQJYQZBVAMCuQK0XaPRhtalqXGcqFoeAvVYA6g8sgM41w9k5ZA5g9F+LC6j9RFCrLABABJSLFLNke0bTXQrAngGgcgBrBF+TBRwYACoHWBoA4uBWC8ASBBEHd2QLsJikpbhAWoAFACJ3CQC+ENFLq4bKuEUSIeDN9ZUBfCOiFysCYDl9hPmzyt8ZwE/QDw4IF1CLIfC1fboGAD69tMsjnaPPMZEqdpLAyvOB/V4cQKurga9rEeORAbS+dpLTRQ2CNQBikibtsJqp1rEBAKoStMaAqd4eN0L54d6f/LMq0zLuKgCQeUeL0mdzrmEBG4DOF7C6Tz1dYLOAKwTBzQU2F+h7CXOLAUgCWxDcguDyqfB2C/zPt8C/X1sKb4cAW1mwOIgOgiJY7iszru56vkGAKT1OhZH9gFmEnHHR0BJbVVCaUdl8Ayf22RgC8gWkhfVo3m54P0C+vL4lCOEdhPQ9QW5VMYglWlHNRwaYyF+Vf5RvBv4A3S6NddYiR0oAAAAASUVORK5CYII=';
    let icon_button_pastecatS = 'data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAABCJJREFUeF7tmz1y1DAUx//KUlByAIqk4wh0SU5CdoYLMFnqJDXJcAQ2J2Gp4AbQxWU6KCgBgSR7LX/qyfrb8RB7JjPZGX08/d6Hnp5shYhH3+AMGh8AbLHClXqDLKL7aE31exziNy4AnEHhUp3jSjqZkjbU73AChY9e+wwaa/UWO+kYY7RrkQtQWKtzbCXziQDkhO9aB4yYTCJQTJvWxRcDrHAksVAZgGuYxR92CvcAEHoX7wTNsMJpCEIQgL7BBTQug5oREg+OI2jQa5F+f0E86AUgniiCuGB9vU0iZQICiukHEDL9uqgC4skApBZZTtTrCp0AxKZfX9GIriDw+3a+PTGqG0Cs9oXEUyxAjyBTKwAv4Rkm7wi7wmDtFyvokKkdwLXN9s6Grd722qkNThP6N7rqa5uEnSSM2SpTA0B0lO2SiBgLxpSpCSA+ynYh2KoN1gka23fV6RbpxmpxgyaAdFMr19xhBdafD7zM8g8yPHEHq3rmluz7VQ003KACgGZq1WxsDY1XeSrdnU5XBTUwMijsoPEawHOGJdkxakqpAmie+FLm/QHgWcoAXt97AE8p42mc+ifYKgCe/5PWPcIwtWy1CoDp/yPIThqyEgfqADRpklkPozb/6kb5s/9nlAA4VwxeICwBlPW+uYrNk8vLB3wAssIHT4yHHGmfpJUAHkcALKDvA6EPgBUAd1hhHarFtanfxqFfeYZ4gGNoe/hJOQB1WVmmNjhy2TEAZgD0IyzDxvNU2GSSBoQ0kwxPnQdCNoA92T4JLHDvkVoL4UhczloBwNsBgnWAjpOdu1wRuA77ZOgsgJcCDwVQaEZUy08ojZUWkKfEDgDrvC2oBAnmCkPkHNrsVlgASC03NbaXrhggABCs5edK67+tCodBC7oAQNsCQ7VAEQBBUVU0Tj8EG7DnCiB4xZ1cuXZB90gxcwBJNViouWA9kVIqswA4AYUbA4BpAJjqEMWUSl8LR3DZjjMNABNriDmAwTAdAEbyNlsAgltmkuK2ShiUwruqa8GxAAkAzvF9a1zgMzReSlcYaMcBELhWo+1cCl+MBXwF8GI2ACTa551dvhkA3ykXDhwXCB6GqNu2QjY9AKc9v8rjXrZU+IQD7PpqA9TFO4X9nBzAUFcjRf369PcmCN5B00pNwSAYAyBP0opyWExXadt7YwGsk6BsG6xfjfuiahznP03JrPiTLia+ncYDAJClwvGLGdhjegtYACS/gDVQ1+3dFguYPAguLrC4QOpLmEsMYBJYguASBKdOhZdd4P/eBXrv9WilLGIUZAdBJ5pq+crMHblTvkEgLrscygBIvWUdRbCJBrUlsVklJhMtvJhmV9wNGgi8F5AmXsXg6czdoOmc19uMfz4eCPk7COV7gu6W2HyCPn4parDKKB230Lgtvhn4C90mL67u8Z6IAAAAAElFTkSuQmCC';
    let icon_button_supercat = 'data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAABP9JREFUeF7NWzFyUzEQfYopKDkARdJxBLqQkxDPcAEmpk5S4wxHwDkJ7uAG0MV06aCgBZGVvvz1v7+0K2vlxDPMMBNptXraXe2+1Tco+NkbnMPiM4AVZrg277EpmN5sqP2EY/zFJYBzGFyZC1xLFzPSgfYj3sDgSzR+A4u5+YC1VEaLcRN6AQZzc4GVZD0RAB3Cd5MCCxaTKFQyZnLzQcAMJxILlQGwBG3+OKncI4CQ3bxXdIMZzjgQWADsDS5hccWejBBxVo5gQNYi4/mCeJAFQLxQAeKC/WWHFOoEMAeTB4Az/bGqAsSrAZBaZL9Q1hWSAIhNf7yjhq4g8PtpfDMxKg1A6ekLEa+xANtAp0kAooRnP30b3Ap7n37YQUKnaQCWLts732/3btbaLHBWMX9nql26JOxNhcxJnXYAKI6yKY0UY0FLnXYBKI+yKQhWZoF5xYltp9p6i/SyJtxgF4B6U+v3nLAC589HUWb5Dxs884XVOHOr9v3hCey4wQAANVMbZmNzWLztUul0Oj1UlMDYwGANi3cAXmpYkpMxOpQhALsVX826vwG8qBEQzb0H8FxFnsVZXMEOAdDzf6V9NxAzylaHAGj6fwPdlUQO4sAYAKu0yJMWYxYPvFH32/6nSQB8qjBEgbAHoOf7nqraenpF+UAMgIz40FPjMSVtk7QegPYBcAXjkp2f6BKfkPS4ZId+lBxZnHY5vzRn2AfIbSCMAWgVAPei0LsMkKjumgIoBc7GLHDis2MATQKgoCSmdTnSsgOCqlNdi+gCYQsAsv2CxIbWmGGeAqM7ICqH9UAYAKB5A4xSzdgGs0QLwyeqg9BZqLcArRSY2wRX1jIcQjVTNSzSXAvNA8ApJouz28CSGm6XDx2G3C9jPWFaBS84XtldhQGAWrqJwinblGQBkAROncMiMNxVGACovwI58/cd3On+Yp+Ys01NRTdwFqsJAK885wISC9DkLCjmqOUAEuU5Xl8iQ/PGcgBoISpTnqs3sm2szvyJXtPJDinoKvqUiAUuiOJTr0/0EiGfB88JAO5UZJcgjRL2Aro1qfGiuyG5pn6kOgAGVzjCLZffb+907896Jl0KALAySklQv3QhCC4R832CU1jn2zr+LQNjRS7wFRavZeOFo/YAYWsVPigHq2jrIgbfyAK+A3gl3FrJsDUMbnGEtdQlxsK7AE2cQCsgfhAAv1QaDmloNICgQK0fNA02hwAghmYFi1vqA5ZaRaOb48+hAagPlsa9XdByiXsKgnewagJLYkQYSw3Qa6lVKBMj92QB9ZXgPtvenZOlxeLhasmbhToAU+9zyVzDPw4q0etOlztwhRW3Uvd3LQvIskGFZit6X/S0AJCxQXLWSVBTaGWwWhbAVoJFCsu4wdqXbL4eUgqCrNkWld0SbkGplacFAOKe+1T8KSJeZACo3F5qAEi4AHHgYlxAjcZTdAE6dL04wDVI9KhxtRjgrZ5TXEZo5q9UmQxhFqAXBMOCbCLDvvnN+L+m6QeF9WJAjzmb0iZjQa6x6hsruh1i5RgQmx0PQqDB6MUI/TLEScvHEi0sYFj/V35gqVb4JKJCawD6kreAHuuSJnorVPPNgigQEgD5bwJFYooHha9N4+ZHSdVYvGBigqPEVHJqLY0OLGcdeoOaNNOB91CxHN06jlzw7TF91rVCt+ZT4zdCDgTfkAgcvBbp2HwfeyzgmOnwzcB/V694rln6lREAAAAASUVORK5CYII=';
    let icon_button_intercat = 'data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAABCtJREFUeF7tmz2W1DAMx+WOkgNQMB1HoGROAvMe99jdk7B7EoYKbgAdU263FPSGv9cOjuMPKVGGZDIpeLy3/pB/lmRJ9hgSfNbaD0T0iYjuiejOGHMSdJ+tqbX2NRHdEBHkuzXG3HEnM9yG1tp3RPQ5ao/FH4wxR+4Yc7TLyIVpIBc2qfmxAHjCPwujsSdrSiNsUFh8GGXH0VAuACwealb6zg6hsXjICQ3dtyA0AVhrYVu3jM1hEWeM02zS0Mi4f9MfVAEIJmITb66u0UAoE0arbkwLQEv1U3GbxBUAcDUyTFU1hSIAgeqna5rNFBh2L/ZRNQDS3WcRn6IB1lp1mbIAooBnrLzqp8KE3Q9ryMpUAoBoD1HV2O9ojNmP7ZzrZ61FEIZgbOyXlWkAYISXLQmk5gvmlCkHQOplSwDujTGHsdsV97PWTtXIohnkAExVtVj2rBZ4e44jSxxVLrFKIzcF24/lGZhBD4CiqsWTQgve+1C6Fk7HfQIQJFofieiVhib5MXqbkgJIM74p8/4iopdTBoj6PhLRC6XxkB90GWwKQMv+ldY9yzC9aDUFoGn/s0ivMGjPD6QArMIEix/ib8WoW3f3n5kc4FJhdI4wBhDqfUsVWlOuLiyOAWzBAQaIXZAWA9iCAwwAOkcYA9iEA/QETsaYnYs88c/GHGDQAucIrwC8BkhOAMT26WVIuJXR9NRzj+VOgqAB3BOgs51UugnlqrELxSbE6TYSLaTN3ITLhcQBADffLlZ6FCo2UhC9pMZrMncj0dwdhQEA9whcEoBBrUFYy3RrCQC4R+AlAXDmvGUAMIOdEcYAl6QBHQBJFUgKAJ76IdT7fGkslNvD3zDmydf+IBTKZ5Ap583Rxz1+yL1L8JsZ92udCntogCQGkALIeWrc7mCcYsXYw8gJL7p7ZBzNBwCQHB1SADlPfYPz1y8Su40C6JfCjuauwsKznMHdv99MrCd8rZjg/AD8eZ0zO7xBeIjL4o3NmXoMPscCwksHDQ3ArrCf21TUWA3AVyJ6ywzDNADUTG5g45UN0gDwDRrwnYjenBFALeocXKdVnLQGgB8A8CS4cNDQgBqAwfiVqzENAKetA/i9dQCPACB5dnJpJuAAcDNB+MkrgNLTl0JBJOeoluQEaesasGoAuURLktm60GfNGjB49jbmOc2aAWQfYQlPtVVrwHNFJ/nVSpRBIm1GAaVUXFE3gVw8kROwFndIQmEsYJBCZ+4rqhVvqQlgfFRy0t8KobCRe1mKn62gJBYXKFDpqX3xC1OkzqFEVurjfrqTe2bHqXaNAcBMHP9bMwBpVYI64S4RgIj8FYAwFxDRXUPjqwZcNUBWD1iDVktkdCUx7tsAycBraXsEAISKrTu0tSxIKmf3PiC88WEHENKZFtj+3xshCOc1ASAA4ZJBuPA83EX+AXjHU4TRd/KNAAAAAElFTkSuQmCC';

    function newElement(ele, methodTarget = [], eleId = 0, eleClasses = [], eventFunction = [], setAttrubutes = [], setInnerHTML = "//invalid" ) {
        let newEle = document.createElement(ele);

        if ( eleId !== 0 ) { newEle.id = eleId }
        if ( eleClasses.length > 0 ) { newEle.classList.add(...eleClasses) }
        if ( eventFunction.length > 0 ) {
            for (let i = 0; i < eventFunction.length; i++) {
                newEle.addEventListener( eventFunction[i][0], eventFunction[i][1] );
            }
        }
        if ( setAttrubutes.length > 0 ) {
            for (let i = 0; i < setAttrubutes.length; i++) {
                newEle.setAttribute( setAttrubutes[i][0], setAttrubutes[i][1] );
            }
        }
        if ( setInnerHTML !== "//invalid") {
            newEle.innerHTML = setInnerHTML;
        }

        switch(methodTarget[0]) {
            case "body.append":
                document.body.append(newEle);
                break;
            case "id.append":
                document.getElementById(methodTarget[1]).append(newEle);
                break;
            case "id.prepend":
                document.getElementById(methodTarget[1]).prepend(newEle);
                break;
            case "querySelector.append":
                document.querySelector(methodTarget[1]).append(newEle);
                break;
            case "querySelector.prepend":
                document.querySelector(methodTarget[1]).prepend(newEle);
        }
    }

    function getUVPointpls(){
        let keypls = Mesh.selected[0].getSelectedFaces()[0];
        let uvpls = Mesh.selected[0].getSelectedVertices()[0];
        storedspls[0] = Mesh.selected[0].faces[keypls].uv[uvpls][0];
        storedspls[1] = Mesh.selected[0].faces[keypls].uv[uvpls][1];
        storedspls[2] = 0;
        if ( setting_copypasteStatus.value ) { Blockbench.setStatusBarText( 'Copycat: Keep [' + storedspls[0] + ', ' + storedspls[1] + ']' ) };
        Canvas.updateUVs();
        UVEditor.loadData();
    }

    function writeUVPointpls(){
        let keypls = Mesh.selected[0].getSelectedFaces()[0];
        let uvpls = Mesh.selected[0].getSelectedVertices()[0];
        Undo.initEdit({elements: Mesh.selected, uv_only: true});
        Mesh.selected[0].faces[keypls].uv[uvpls][0] = storedspls[0];
        Mesh.selected[0].faces[keypls].uv[uvpls][1] = storedspls[1];
        Undo.finishEdit('PasteCat');
        storedspls[2] = 1;
        if ( setting_copypasteStatus.value ) { Blockbench.setStatusBarText( 'Pastecat: Placed [' + storedspls[0] + ', ' + storedspls[1] + ']' ) };
        Canvas.updateUVs();
        UVEditor.loadData();
    }

    function snapFaceMove() {
        let keypls = Mesh.selected[0].getSelectedFaces()[0];
        let uvpls = Mesh.selected[0].getSelectedVertices()[0];
        let diff = [ storedspls[0] - Mesh.selected[0].faces[keypls].uv[uvpls][0], storedspls[1] - Mesh.selected[0].faces[keypls].uv[uvpls][1] ];
        let uvList = Object.keys(Mesh.selected[0].faces[keypls].uv);

        Undo.initEdit({elements: Mesh.selected, uv_only: true});
        for ( let i = 0, len = uvList.length -1; i <= len; i++ ) {
            for ( let j = 0; j <= 1; j++ ) {
                let texUV = [ UVEditor.getTexture().width, UVEditor.getTexture().height ];
                let detectCoord = Mesh.selected[0].faces[keypls].uv[uvList[i]][j] + diff[j];

                if ( detectCoord < 0 ) { detectCoord = 0 };
                if ( detectCoord > texUV[j] ) { detectCoord = texUV[j] };
                Mesh.selected[0].faces[keypls].uv[uvList[i]][j] = detectCoord;
            }
        };
        Undo.finishEdit('Face snap move Cat');
        Canvas.updateUVs();
        UVEditor.loadData();
    }

    function superUVPointpls(){
        if ( storedspls[2] == 0 ) {
            writeUVPointpls();
            button_supercat.setIcon( icon_button_copycatS );
            button_supercat.setName( 'Supercat: Copy mode!' );
        } else {
            getUVPointpls();
            button_supercat.setIcon( icon_button_pastecatS );
            button_supercat.setName( 'Supercat: Paste mode!' );
        }
    }

    var snapCircleisNew = true;
    if ( document.querySelectorAll('.snapCat-collection') ) { document.querySelectorAll('.snapCat-collection').forEach( e => e.remove() ) };
    var pointInfo = {};
    var meshListpls = [];
    var redeemCode = { self: [ 0, 0, -1 ], cat: [ 0, 0, -1 ] };
    var crushNow;

    function snapUVPointpls(){
        let chec = false;
        if ( UVEditor.isFaceUV() && Mesh.selected.length == 1 && Mesh.selected[0].getSelectedVertices().length == 1 && Mesh.selected[0].getSelectedFaces().length == 1 ) {
            chec = true;
        }
        if ( chec == false ) return;

        redeemCode = { self: [ 0, 0, -1 ], cat: [ 0, 0, -1 ] };

        let keypls = Mesh.selected[0].getSelectedFaces()[0];
        let uvpls = Mesh.selected[0].getSelectedVertices()[0];
        pointInfo = { thisPt: [ 0, 0 ], thisVertices: [], thisTexture: 'null', thisMesh: 'null' };
        pointInfo.thisMesh = Mesh.selected[0].uuid;
        pointInfo.thisPt = Mesh.selected[0].faces[keypls].uv[uvpls]; 
        pointInfo.thisTexture = Mesh.selected[0].faces[keypls].texture; 
        pointInfo.thisVertices = Mesh.selected[0].faces[keypls].uv; 
        pointInfo.thisVertices = Object.keys(pointInfo.thisVertices).filter(objKey =>
            objKey !== uvpls).reduce((newObj, key) =>
            {
                newObj[key] = pointInfo.thisVertices[key];
                return newObj;
            },{}
        );

        meshListpls = [];
        meshListpls[0] = { meshFaces: [] };
        meshListpls[0].meshFaces[0] = { faceKey: false, textureId: false, uvPt:[] };

        for ( let i = 0, len = Mesh.all.length; i < len; i++ ) {
            meshListpls[i] = { meshId: false, meshFaces: [] };
            meshListpls[i].meshId = Mesh.all[i].uuid;

            for ( let i2 = 0, len2 = Object.keys(Mesh.all[i].faces).length - 1; i2 <= len2; i2++) {
                meshListpls[i].meshFaces[i2] = { faceKey: false, textureId: false, uvPt:[] };
                let faceKeyNameListpls = Object.getOwnPropertyNames(Mesh.all[i].faces);
                meshListpls[i].meshFaces[i2].faceKey = faceKeyNameListpls[i2];
                meshListpls[i].meshFaces[i2].textureId = Mesh.all[i].faces[faceKeyNameListpls[i2]].texture;

                for ( let i3 = 0, len3 = Object.keys(Mesh.all[i].faces[faceKeyNameListpls[i2]].uv).length -1; i3 <= len3; i3++ ) {
                    let uvKeyNameListpls = Object.getOwnPropertyNames(Mesh.all[i].faces[faceKeyNameListpls[i2]].uv);
                    meshListpls[i].meshFaces[i2].uvPt[i3] = Mesh.all[i].faces[faceKeyNameListpls[i2]].uv[uvKeyNameListpls[i3]];
                }
            }
        };

        let tempList = meshListpls;
        tempList = tempList.filter(e => e.meshId == pointInfo.thisMesh );
        tempList = tempList.map( e => ({
            meshId: e.meshId,
            meshFaces: e.meshFaces.filter( face => face.faceKey !== keypls )
        }));

        meshListpls = meshListpls.filter(e => e.meshId !== pointInfo.thisMesh );
        meshListpls.push( tempList[0] );

        meshListpls = meshListpls.map( e => ({
            meshId: e.meshId,
            meshFaces: e.meshFaces.filter( face => face.textureId !== false && face.textureId == pointInfo.thisTexture )
        }));
        meshListpls = meshListpls.filter(e => e.meshFaces.length !== 0 );

        let x2 = pointInfo.thisPt[0];
        let y2 = pointInfo.thisPt[1];

        let keyspls = Object.keys( pointInfo.thisVertices );
        for ( let i = 0, len = keyspls.length; i < len; i++  ) {
            let x1 = pointInfo.thisVertices[keyspls[i]][0];
            let y1 = pointInfo.thisVertices[keyspls[i]][1];
            let gotDis = getDistance(x2, y2, x1, y1);
            pointInfo.thisVertices[keyspls[i]][2] = gotDis;

            if ( redeemCode.self[2] == -1 ) {
                redeemCode.self[0] = x1;
                redeemCode.self[1] = y1;
                redeemCode.self[2] = gotDis;
            } else if ( gotDis < redeemCode.self[2] ) {
                redeemCode.self[0] = x1;
                redeemCode.self[1] = y1;
                redeemCode.self[2] = gotDis;
            }
        }

        for ( let i = 0, len = meshListpls.length; i < len; i++ ) {
            for ( let j = 0, len2 = meshListpls[i].meshFaces.length; j < len2; j++ ) {
                for ( let k = 0, len3 = meshListpls[i].meshFaces[j].uvPt.length; k < len3; k++ ) {
                    let x1 = meshListpls[i].meshFaces[j].uvPt[k][0];
                    let y1 = meshListpls[i].meshFaces[j].uvPt[k][1];
                    let gotDis = getDistance(x2, y2, x1, y1);
                    meshListpls[i].meshFaces[j].uvPt[k][2] = gotDis;

                    if ( redeemCode.cat[2] == -1 ) {
                        redeemCode.cat[0] = x1;
                        redeemCode.cat[1] = y1;
                        redeemCode.cat[2] = gotDis;
                    } else if ( gotDis < redeemCode.cat[2] ) {
                        redeemCode.cat[0] = x1;
                        redeemCode.cat[1] = y1;
                        redeemCode.cat[2] = gotDis;
                    }
                }
            }
        }

        for ( let i = 0, len = Mesh.all.length; i < len; i++ ) {

            for ( let i2 = 0, len2 = Object.keys(Mesh.all[i].faces).length - 1; i2 <= len2; i2++) {
                let faceKeyNameListpls = Object.getOwnPropertyNames(Mesh.all[i].faces);

                for ( let i3 = 0, len3 = Object.keys(Mesh.all[i].faces[faceKeyNameListpls[i2]].uv).length -1; i3 <= len3; i3++ ) {
                    let uvKeyNameListpls = Object.getOwnPropertyNames(Mesh.all[i].faces[faceKeyNameListpls[i2]].uv);
                    Mesh.all[i].faces[faceKeyNameListpls[i2]].uv[uvKeyNameListpls[i3]].splice(2,1);
                }
            }
        };

        crushNow = redeemCode.cat;
        if ( setting_snapSelf.value == true && redeemCode.self[2] < redeemCode.cat[2] ) {
            crushNow = redeemCode.self;
        }

        let getCircleR = uvToFrame( setting_snapPower.value, setting_snapPower.value );
        if ( snapCircleisNew == true ) {
            let getPreviewColor;

            newElement( 'div', ['id.append', 'uv_frame'], 'snapCirclePls', ['snapCat-collection'], 0, [ ['style','visibility:visible;position:absolute;width:'+getCircleR[0]*2+'px;height:'+getCircleR[0]*2+'px;border: 1px solid #ffffffcc;border-radius:'+getCircleR[0]+'px' ] ] );
            newElement( 'div', ['id.append', 'uv_frame'], 'snapLine1', ['snapCat-collection'], 0, [ ['style','visibility:visible;position:absolute;width:1px;height:1px;border:1px solid #ffffffcc;top:0;left:0;transform-origin:0 0'] ] );
            newElement( 'div', ['id.append', 'uv_frame'], 'snapLine2', ['snapCat-collection'], 0, [ ['style','visibility:visible;position:absolute;width:1px;height:1px;border:1px solid #ffffffcc;top:0;left:0;transform-origin:0 0'] ] );
            snapCircleisNew = false;
        } else {
            if ( setting_snapDraw.value == true ) {
                snapDrawToggle( '.snapCat-collection', 'visible');
            } else {
                snapDrawToggle( '.snapCat-collection', 'hidden');
            }
        };

        if ( setting_snapColorSys.value ) {
            getPreviewColor = 'var(--color-uv-selected)';
        } else {
            getPreviewColor = setting_snapColor.value;
        }

        document.getElementById('snapCirclePls').style.width = getCircleR[0]*2 + 'px';
        document.getElementById('snapCirclePls').style.height = getCircleR[0]*2 + 'px';
        document.getElementById('snapCirclePls').style.borderRadius = getCircleR[0] + 'px';
        document.getElementById('snapCirclePls').style.border = '1px solid ' + getPreviewColor;
        let vertexStyle = document.getElementsByClassName('uv_mesh_vertex selected')[0].style;
        let selectedFaceStyle = document.getElementsByClassName('mesh_uv_face uv_face selected')[0].style;
        document.getElementById('snapCirclePls').style.left = Number( selectedFaceStyle.left.slice(0, -2) ) + Number( vertexStyle.left.slice(0, -2) ) - getCircleR[0] + 'px';
        document.getElementById('snapCirclePls').style.top = Number( selectedFaceStyle.top.slice(0, -2) ) + Number( vertexStyle.top.slice(0, -2) ) - getCircleR[0] + 'px';

        let lines = [ document.getElementById('snapLine1'), document.getElementById('snapLine2') ];
        if ( crushNow[2] <= setting_snapPower.value ) {
            let adjList = Mesh.selected[0].faces[keypls].getSortedVertices();
            let adjIndex = adjList.indexOf(uvpls);
            let indexPre = adjIndex - 1;
            let indexPost = adjIndex + 1;
            if ( indexPre == -1 ) { indexPre = adjList.length - 1 };
            if ( indexPost == adjList.length ) { indexPost = 0 };
            let adjVertices = [ Mesh.selected[0].faces[keypls].uv[adjList[indexPre]], Mesh.selected[0].faces[keypls].uv[adjList[indexPost]] ];

            let offsetL = [ uvToFrame( adjVertices[0][0], adjVertices[0][1] ), uvToFrame( adjVertices[1][0], adjVertices[1][1] ) ];
            let crushInFrame = uvToFrame( crushNow[0], crushNow[1] );

            for ( let i = 0; i <= 1; i++ ) {
                lines[i].style.visibility = 'visible';
                lines[i].style.left = offsetL[i][0] + 'px';
                lines[i].style.top = offsetL[i][1] + 'px';
                lines[i].style.transform = 'rotate('+ getDegree( crushNow[0] - adjVertices[i][0], crushNow[1] - adjVertices[i][1] )+'deg)';
                lines[i].style.width = getDistance( offsetL[i][0], offsetL[i][1], crushInFrame[0], crushInFrame[1] ) + 'px';
                lines[i].style.border = '1px solid ' + getPreviewColor;
            }
        } else {
            lines[0].style.visibility = 'hidden';
            lines[1].style.visibility = 'hidden';
        }
    }

    function snapFireOnce() {
        if ( crushNow[2] <= setting_snapPower.value ) {
            let keypls = Mesh.selected[0].getSelectedFaces()[0];
            let uvpls = Mesh.selected[0].getSelectedVertices()[0];

            Mesh.selected[0].faces[keypls].uv[uvpls][0] = crushNow[0];
            Mesh.selected[0].faces[keypls].uv[uvpls][1] = crushNow[1];

            Canvas.updateUVs();
            UVEditor.loadData();
        }

    }

    function uvToFrame( u, v ) {
        let texUV = [ UVEditor.getTexture().width, UVEditor.getTexture().height ];
        let offsetLT = [ Number( document.getElementById('uv_frame').style.width.slice(0, -2) ), Number( document.getElementById('uv_frame').style.height.slice(0, -2) ) ];
        return [ offsetLT[0] * u / texUV[0], offsetLT[1] * v / texUV[1] ];
    }

    function getDistance(x2, y2, x1, y1) {
        return Math.sqrt( Math.pow( x2 - x1, 2 ) + Math.pow( y2 - y1, 2 ) );
    }

    function getDegree( x, y ) {
        return ( Math.atan2(y, x) * 180 ) / Math.PI;
    }

    function snapUVPointOffpls() {

        snapDrawToggle( '.snapCat-collection', 'hidden');
        document.getElementById('uv_viewport').removeEventListener( 'mousemove', snapUVPointpls );
        document.getElementById('uv_viewport').removeEventListener( 'mouseup', snapFireOnce );
        document.getElementById('uv_viewport').removeEventListener( 'mouseenter', snapDrawOn );
        document.getElementById('uv_viewport').removeEventListener( 'mouseleave', snapDrawOff );
    }

    function snapDrawOn() {
        let chec = false;
        if ( UVEditor.isFaceUV() && Mesh.selected.length == 1 && Mesh.selected[0].getSelectedVertices().length == 1 && Mesh.selected[0].getSelectedFaces().length == 1 ) {
            chec = true;
        }
        if ( chec == false ) return;
        if ( setting_snapDraw == false ) return;

        if ( UVEditor.isFaceUV() && Mesh.selected.length == 1 && Mesh.selected[0].getSelectedVertices().length == 1 && Mesh.selected[0].getSelectedFaces().length == 1 ) {
            document.querySelectorAll('.snapCat-collection').forEach( e => e.style.visibility = 'visible' );
        }
    }

    function snapDrawOff() {
        document.querySelectorAll('.snapCat-collection').forEach( e => e.style.visibility = 'hidden' );
    }

    function snapDrawToggle( selector, state) {
        document.querySelectorAll( selector ).forEach( e => e.style.visibility = state );
    }

    function pointNearIntpls() {
        let list = Mesh.selected[0].getSelectedVertices();
        Undo.initEdit({elements: Mesh.selected});
        for ( let i = 0, len = list.length; i < len; i++ ) {
            Mesh.selected[0].vertices[list[i]] = Mesh.selected[0].vertices[list[i]].map( e => Math.round( e / setting_interPower.value ) * setting_interPower.value );
        }
        Undo.finishEdit('Intercat');
        Canvas.updateAllPositions();
    }

    Plugin.register('uv_point_copycat', {
        title: 'UV Point Copycat!',
        icon: icon_dacat,
        author: 'OuOun',
        description: 'Easy copy & paste for selected mesh uv coordinate, made manual mapping purfect!',
        about: 'Watch mme get da uv point for ya, it will bee quick, trust mme! Big thx to Gudf. With other small features.',
        tags: [],
        version: '0.4.30',
        variant: 'desktop',
        onload() {
            button_copycat = new Action('uv_point_copy', {
                icon: icon_button_copycat,
                name: 'Summon UV Copycat',
                category: 'uv',
                description: 'Let mme keep dis UV cooconut for ya!',
                condition: () => ( UVEditor.isFaceUV() && Mesh.selected.length == 1 && Mesh.selected[0].getSelectedVertices().length == 1 && Mesh.selected[0].getSelectedFaces().length == 1 ),
                click() {
                    getUVPointpls();
                }
            });

            button_pastecat = new Action('uv_point_paste', {
                icon: icon_button_pastecat,
                name: 'Summon UV Pastecat',
                category: 'uv',
                description: 'Let mme place dis UV cooconut for ya!',
                condition: () => ( UVEditor.isFaceUV() && Mesh.selected.length == 1 && Mesh.selected[0].getSelectedVertices().length == 1 && Mesh.selected[0].getSelectedFaces().length == 1 ),
                click() {
                    writeUVPointpls();
                }
            });

            button_supercat = new Action('uv_point_quick', {
                icon: icon_button_supercat,

                name: 'Summon UV Supercat',
                category: 'uv',
                description: 'Rotate between Copycat and Pastecat! Tho only a few can master dis skill!!',
                condition: () => ( UVEditor.isFaceUV() && Mesh.selected.length == 1 && Mesh.selected[0].getSelectedVertices().length == 1 && Mesh.selected[0].getSelectedFaces().length == 1 ),
                click() {
                    superUVPointpls();
                }
            });

            button_snapcat = new Toggle('uv_point_snap', {
                icon: icon_button_default,
                name: 'Summon UV Snapcat',
                category: 'uv',
                description: 'Purfectly snapped, as all points sould bee!',
                condition: () => ( UVEditor.isFaceUV() && Mesh.selected.length == 1 && Mesh.selected[0].getSelectedVertices().length == 1 && Mesh.selected[0].getSelectedFaces().length == 1 ),
                onChange(value) {
                    if (value) {
                        button_snapcat.setIcon( icon_button_snapcat );
                        document.getElementById('uv_viewport').addEventListener( 'mousemove', snapUVPointpls );
                        document.getElementById('uv_viewport').addEventListener( 'mouseup', snapFireOnce );
                        document.getElementById('uv_viewport').addEventListener( 'mouseenter', snapDrawOn );
                        document.getElementById('uv_viewport').addEventListener( 'mouseleave', snapDrawOff );

                    } else {
                        button_snapcat.setIcon( icon_button_default );
                        document.getElementById('uv_viewport').removeEventListener( 'mousemove', snapUVPointpls );
                        document.getElementById('uv_viewport').removeEventListener( 'mouseup', snapFireOnce );
                        document.getElementById('uv_viewport').removeEventListener( 'mouseenter', snapDrawOn );
                        document.getElementById('uv_viewport').removeEventListener( 'mouseleave', snapDrawOff );

                        if ( document.querySelectorAll('.snapCat-collection') ) { document.querySelectorAll('.snapCat-collection').forEach( e => e.style.visibility = 'hidden' ) };

                    }
                }
            });

            button_intercat = new Action('mesh_pp_snap', {
                icon: icon_button_intercat,
                name: 'Summon Intercat',
                category: 'edit',
                description: "Snap vertices of the selected meshes to their nearest integer position.",
                condition: () => ( Mesh.selected[0] && Mesh.selected[0].getSelectedVertices().length ),
                click() {
                    pointNearIntpls();
                }
            });

            button_facetime_snapcat = new Action('uv_face_snap', {
                icon: icon_button_snapcat_facetime,
                name: 'Summon snapcat - facetime mode',
                category: 'uv',
                description: 'Move the single selected uv vertex, along with its face, to reference point stored by Copycat.',
                condition: () => ( Mesh.selected[0] && Mesh.selected[0].getSelectedVertices().length ),
                click() {
                    snapFaceMove();
                }
            });

            setting_copypasteStatus = new Setting('copypaste_power', {
                name: 'Copypaste Status Bar',
                description: 'Display current copy/pastecat status at bottom status bar.',
                value: true,
                onChange(e) {
                    if ( e == false ) { Blockbench.setStatusBarText( Project.name ) };
                }
            });

            setting_interPower = new Setting('intercat_power', {
                name: 'Inter Power',
                description: "Nearest value for the position of selected mesh's vertices round to.",
                type: 'number',
                value: 1,
                min: 0.001
            });

            setting_snapSelf = new Setting('snapself_power', {
                name: 'Snap Urself?',
                description: 'Treat other UV vertices from current face as snap-able points.',
                value: false
            });

            setting_snapPower = new Setting('snapcat_power', {
                name: 'Snap Power',
                description: 'Cursor snap distance. From current mouse location, how far can Snapcat search for nearby UV vertices.',
                type: 'number',
                value: 6,
                min: 1
            });

            setting_snapDraw = new Setting('snapcat_doodle', {
                name: 'Snap Preview',
                description: 'Display snap power range circle and preview connected lines.',
                value: true
            });

            setting_snapColorSys = new Setting('snapcat_color_system', {
                name: 'Snap Preview - Default Color',
                description: 'Snap preview line use uv_selected color.',
                value: false
            });

            setting_snapColor = new Setting('snapcat_color', {
                name: 'Snap Preview - Custom Color',
                description: 'Snap preview line use custom CSS color when "Snap Preview - Default Color" is off.',
                type: 'string',
                value: '#fc0303ff'
            });

            MenuBar.menus.uv.addAction(button_copycat);
            MenuBar.menus.uv.addAction(button_pastecat);
            MenuBar.menus.uv.addAction(button_supercat);
            MenuBar.menus.uv.addAction(button_snapcat);
            MenuBar.menus.uv.addAction(button_facetime_snapcat);
            MenuBar.menus.edit.addAction(button_intercat);
        },
        onunload() {
            button_copycat.delete();
            button_pastecat.delete();
            button_supercat.delete();
            button_intercat.delete();
            button_snapcat.delete();
            button_facetime_snapcat.delete();
            snapUVPointOffpls();
        },
        oninstall() {
            Blockbench.showMessageBox({
                title: 'Hallo there',
                icon: icon_button_snapcat,
                message: "Don't furget to check all teh options in plugin setting page!",
                buttons: ['K']
            })
        },
        onuninstall() {
            snapUVPointOffpls();
            document.querySelectorAll('.snapCat-collection').forEach( e => e.remove() );
            snapCircleisNew = true;
            Blockbench.showMessageBox({
                title: 'Byebye',
                icon: icon_button_snapcat,
                message: 'Hava nice day!',
                buttons: ['K Bye']
            })
        }
    });

})()
