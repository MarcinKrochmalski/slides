<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Entity\Slide;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class SlideController extends AbstractController
{
    /**
     * @Route("/", name="home_page")
     */
    public function index(EntityManagerInterface $entityManager): Response
    {
        
        $slideRepository = $entityManager->getRepository(Slide::class);
        $slides = $slideRepository->findBy(
            ['active' => true]
        );

        return $this->render('slide/index.html.twig', ['slides' => $slides]);

    }

    private function prepareJsonSlides($slides){

        $slidesToJson = [];
        foreach ($slides as $slide) {
            $photos = $slide->getPhoto();

            $photosToJson = [];

            foreach ($photos as $photo) {
                $photosToJson[] = [
                    "id" => $photo->getId(),
                    "src" => $photo->getSrc(),
                    "title" => $photo->getTitle(),
                    "alt" => $photo->getAlt(),
                ];
            }

            $slidesToJson[] = [
                "text" => [
                    "title" => $slide->getTitle(),
                    "description" => $slide->getDescription(),
                ],
                "photos" => $photosToJson,
                "textIndex" => 4,
                "activeIndex" => 0,

            ];
        }

        return $slidesToJson;

    }


}
