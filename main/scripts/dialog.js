const initializeDetailButtonEvents = () => {
    // CAN'T TOUCH THIS - START
    const allCloseButtons = document.querySelectorAll(".button--close")

    for (const btn of allCloseButtons) {
        btn.addEventListener(
            "click",
            theEvent => {
                const dialogElement = theEvent.target.parentNode
                dialogElement.close()
            }
        )
    }
    // CAN'T TOUCH THIS - END


    // You will be writing code below this line

    // Show Bart's details when the button is clicked
    document.querySelector("#button--bitey").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--bitey")
            theDialog.showModal()
        }
    )

    document.querySelector("#button--jaws").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--jaws")
            theDialog.showModal()
        }
    )


    document.querySelector("#button--mrdangles").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--mrdangles")
            theDialog.showModal()
        }
    )

    document.querySelector("#button--mrbubbles").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--mrbubbles")
            theDialog.showModal()
        }
    )

    document.querySelector("#button--barry").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--barry")
            theDialog.showModal()
        }
    )

    document.querySelector("#button--snappy").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--snappy")
            theDialog.showModal()
        }
    )

}

export default initializeDetailButtonEvents

