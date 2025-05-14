import Image from "next/image"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { MenuIcon } from "lucide-react"

export default function Header() {
  return (
    <Card>
      <CardContent className="flex flex-row items-center justify-between ">
        <Image src="/logo.png" alt="logo" width={120} height={18} />
        <Button variant="outline" size="icon">
          <MenuIcon />
        </Button>
      </CardContent>
    </Card>
  )
}
